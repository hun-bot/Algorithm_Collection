#include <stddef.h>

int square_sum(const int *values, size_t count)
{
  int sum = 0;
  for (; count; count--)
    sum += values[count - 1] * values[count - 1];
  return sum;
}

