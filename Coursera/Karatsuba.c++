#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

// Helper function to add leading zeros to make strings of equal length
string padZeros(const string &str, int n) {
    string padded = str;
    for (int i = 0; i < n; i++) {
        padded = "0" + padded;
    }
    return padded;
}

// Function to add two large numbers represented as strings
string addStrings(const string &num1, const string &num2) {
    string result = "";
    int carry = 0, sum = 0;
    int len1 = num1.length(), len2 = num2.length();
    int maxLen = max(len1, len2);

    // Pad shorter number with zeros
    string n1 = padZeros(num1, maxLen - len1);
    string n2 = padZeros(num2, maxLen - len2);

    // Add the numbers digit by digit from right to left
    for (int i = maxLen - 1; i >= 0; i--) {
        sum = (n1[i] - '0') + (n2[i] - '0') + carry;
        carry = sum / 10;
        result += (sum % 10) + '0';
    }

    // Add the final carry if exists
    if (carry) result += carry + '0';

    // Reverse the result to get the correct order
    reverse(result.begin(), result.end());
    return result;
}

// Function to subtract two large numbers represented as strings
string subtractStrings(const string &num1, const string &num2) {
    string result = "";
    int borrow = 0, diff = 0;
    int len1 = num1.length(), len2 = num2.length();
    int maxLen = max(len1, len2);

    // Pad shorter number with zeros
    string n1 = padZeros(num1, maxLen - len1);
    string n2 = padZeros(num2, maxLen - len2);

    // Subtract the numbers digit by digit from right to left
    for (int i = maxLen - 1; i >= 0; i--) {
        diff = (n1[i] - '0') - (n2[i] - '0') - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        result += diff + '0';
    }

    // Remove leading zeros from the result
    while (result.length() > 1 && result.back() == '0') result.pop_back();

    // Reverse the result to get the correct order
    reverse(result.begin(), result.end());
    return result;
}

// Karatsuba multiplication function
string karatsuba(const string &x, const string &y) {
    int n = max(x.size(), y.size());

    // Base case for recursion - multiply single-digit numbers directly
    if (n == 1) {
        return to_string((x[0] - '0') * (y[0] - '0'));
    }

    // Pad the numbers with zeros to make their lengths even
    if (n % 2 != 0) n++;
    string x_pad = padZeros(x, n - x.size());
    string y_pad = padZeros(y, n - y.size());

    // Split the numbers into two halves
    int m = n / 2;
    string x_high = x_pad.substr(0, m);
    string x_low = x_pad.substr(m);
    string y_high = y_pad.substr(0, m);
    string y_low = y_pad.substr(m);

    // Recursively calculate z2, z0, and z1
    string z0 = karatsuba(x_low, y_low);
    string z2 = karatsuba(x_high, y_high);
    string z1 = karatsuba(addStrings(x_low, x_high), addStrings(y_low, y_high));
    z1 = subtractStrings(subtractStrings(z1, z0), z2);

    // Combine the results according to the Karatsuba formula
    string result = addStrings(addStrings(z2 + string(2 * m, '0'), z1 + string(m, '0')), z0);

    return result;
}

int main() {
    // Input the two 64-digit numbers
    string num1 = "3141592653589793238462643383279502884197169399375105820974944592";
    string num2 = "2718281828459045235360287471352662497757247093699959574966967627";

    // Compute the product using Karatsuba's algorithm
    string product = karatsuba(num1, num2);

    // Output the result
    cout << product << endl;

    return 0;
}
