import React from 'react';
import {
  Box,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
  Text,
} from '@chakra-ui/react';

interface Option {
  label: string;
  value: string;
  skip_filter?: boolean;
}

interface QuizCardProps {
  type: 'single' | 'multiple';
  options: Option[];
  selectedValues: string[];
  onChange: (value: string) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  type,
  options,
  selectedValues,
  onChange,
}) => {
  return (
    <Stack spacing={4} align="stretch" width="100%">
      {options.map((option) => (
        <Box
          key={option.value}
          p={4}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          borderRadius="md"
          cursor="pointer"
          onClick={() => onChange(option.value)}
          _hover={{
            borderColor: 'blue.400',
            transform: 'translateY(-1px)',
            transition: 'all 0.2s',
          }}
        >
          {type === 'single' ? (
            <RadioGroup value={selectedValues[0] || ''}>
              <Radio
                value={option.value}
                onChange={() => onChange(option.value)}
                size="lg"
              >
                <Text ml={2}>{option.label}</Text>
              </Radio>
            </RadioGroup>
          ) : (
            <Checkbox
              isChecked={selectedValues.includes(option.value)}
              onChange={() => onChange(option.value)}
              size="lg"
            >
              <Text ml={2}>{option.label}</Text>
            </Checkbox>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default QuizCard; 