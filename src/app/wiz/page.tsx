'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InputTextCard } from "@/components/input-text-card";
import { MultipleChoiceCard } from "@/components/multiple-choice-card";
import { Question } from "@/lib/db/models/question";

// New type definition
interface FormattedCard {
  type: string;
  key: string;
  props: {
    title: string;
    placeholder?: string;
    isRequired?: boolean;
    relations?: string[];
    subTitle?: string;
  };
}

type CommonProps = {
  title: string;
  isRequired?: boolean;
  value: string | string[];
  onNext: (value: string | string[]) => void;
  onPrevious: () => void;
};

export type InputTextCardProps = CommonProps & {
  placeholder?: string;
};

export type MultipleChoiceCardProps = CommonProps & {
  relations: string[];
};

const Wizard = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});
  const [wizardCards, setWizardCards] = useState<FormattedCard[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api/questions');
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        const formattedCards: FormattedCard[] = data.questions.map((question : Question) => ({
          type: question.type,
          key: question.key,
          props: {
            title: question.title,
            placeholder: question.placeholder,
            isRequired: question.isRequired,
            relations: question.relations,
            subTitle: question.subTitle,
          },
        }));
        setWizardCards(formattedCards);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNext = async (value: string | string[]) => {
    const currentCard = wizardCards[currentStep];

    setFormData(prevData => {
      const newData = { ...prevData, [(currentCard as { key: string }).key]: value };
      console.log(`Saving ${(currentCard as { key: string }).key}:`, value);
      console.log('Updated form data:', newData);
      return newData;
    });

    if (currentStep < wizardCards.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Final form data:', formData);

      // Make API call to generate speech
      try {
        const response = await fetch('/api/generate-speech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: formData }),
        });

        if (!response.ok) {
          throw new Error('Failed to generate speech');
        }

        const result = await response.json();
        if(localStorage) {
          localStorage.setItem('speechResult', JSON.stringify(result));
          localStorage.setItem('email', formData.email as string);
        }

        router.push(`/speech?speech=${result.speech}`);
      } catch (error) {
        console.error('Error generating speech:', error);
        // Handle error (e.g., show error message to user)
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCard = () => {
    const card = wizardCards[currentStep];
    if (!card) return null; // Handle case when card is undefined

    const commonProps = {
      onNext: handleNext,
      onPrevious: handlePrevious,
      isTextArea: false,
      value: formData[(card as { key: string }).key] || '',
    };

    switch ((card as { type: string }).type.toLowerCase()) {
      case 'text':
        return <InputTextCard
          {...commonProps}
          title={card.props.title}
          value={commonProps.value as string}
          placeholder={card.props.placeholder}
        />;
      case 'multipleChoice':
        return <MultipleChoiceCard
          {...commonProps}
          title={card.props.title}
          relations={card.props.relations || []}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen min-w-[400px] bg-[#FAF7F2] flex items-center justify-center">
      {renderCard()}
    </div>
  );
};

export default Wizard;