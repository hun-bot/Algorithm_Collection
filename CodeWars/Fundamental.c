#include <stddef.h>

int square_sum(const int *values, size_t count)
{
  int sum = 0;
  for (; count; count--)
    sum += values[count - 1] * values[count - 1];
  return sum;
}

#include <stdbool.h>

size_t count_sheep(const bool *sheep, size_t count){
    int sum = 0;
    for(int i=0; i < count; i++) sum += sheep[i];
    return sum;
}

#include <stddef.h>

void count_positives_sum_negatives(
  int *values, size_t count, int *positivesCount, int *negativesSum) 
{
  for(int i=0;i<count;i++){
    if(values[i]>0) *positivesCount+=1;
    else *negativesSum+=values[i];
  }
}  