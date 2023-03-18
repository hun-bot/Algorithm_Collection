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