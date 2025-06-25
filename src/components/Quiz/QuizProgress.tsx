import React from 'react';
import { Box, Progress, Text, Flex } from '@chakra-ui/react';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <Box w="100%" mb={8}>
      <Flex justify="space-between" mb={2}>
        <Text fontSize="sm" color="gray.600">
          Question {currentQuestion + 1} of {totalQuestions}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {Math.round(progress)}%
        </Text>
      </Flex>
      <Progress
        value={progress}
        size="sm"
        colorScheme="blue"
        borderRadius="full"
        bg="gray.100"
      />
    </Box>
  );
};

export default QuizProgress; 