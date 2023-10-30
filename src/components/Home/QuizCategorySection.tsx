import React from 'react';
import { QuizThumbnail } from '@/components';
import { QuizCategorySectionProps } from '@/types/homeQuiz';

const QuizCategorySection: React.FC<QuizCategorySectionProps> = ({
  title,
  quiz,
}) => {
  const displayedQuiz = quiz ? quiz.slice(0, 8) : [];

  return (
    <div>
      <h1 className="my-[60px] text-[24px] text-blue font-extrabold text-center">
        {title}
      </h1>
      <div className="gap-5 grid grid-cols-4">
        {displayedQuiz.map(quiz => (
          <QuizThumbnail key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizCategorySection;
