#include <vector>
#include <iostream>
#include <algorithm>
/*
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> temp(nums1.begin(),nums1.begin()+m);

        temp.insert(temp.end(),nums2.begin(),nums2.end());

        sort(temp.begin(),temp.end());
        
        for(int i=0;i<m+n;i++){
            nums1[i]=temp[i];
        }
    }
}; */

class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int j = 0;
        for(int i = m ; i < m+n ; i++){
            nums1[i] = nums2[j];
            j++;
        }
        sort(nums1.begin() , nums1.end());
        return;
    }
};