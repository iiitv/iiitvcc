import { ResourceData } from "./components/CPComponents";

export const initMainsLinks: ResourceData[] = [
  {
    title: "USACO Guide — Intro to CP",
    url: "https://usaco.guide/general/intro-cp",
  },
  {
    title: "USACO Guide — Time Complexity (Bronze)",
    url: "https://usaco.guide/bronze/time-comp",
  },
  {
    title: "USACO Guide — Complete Search (Bronze)",
    url: "https://usaco.guide/bronze/intro-complete",
  },
];

export const afterInitMainsLinks: ResourceData[] = [
  {
    title: "YouTube — C++ STL",
    url: "https://youtu.be/RRVYpIET_RU",
  },
  {
    title: "Fast I/O",
    url: "https://usaco.guide/general/fast-io",
  },
  {
    title: "Basic Debugging",
    url: "https://usaco.guide/general/basic-debugging",
  },
  {
    title: "Debugging Checklist",
    url: "https://usaco.guide/general/debugging-checklist",
  },
  {
    title: "Debugging C++",
    url: "https://usaco.guide/general/debugging-cpp",
  },
  {
    title: "Generic Code",
    url: "https://usaco.guide/general/generic-code",
  },
  {
    title: "Lambda Functions",
    url: "https://usaco.guide/general/lambda-funcs",
  },
];

export const winterOfCodeWeeks: {
  weekNumber: number;
  topics: string;
  resources: ResourceData[];
  questions: ResourceData[];
  note?: string;
}[] = [
  {
    weekNumber: 1,
    topics: "Arrays, Sorting, Number Theory",
    resources: [
      {
        title: "Time Complexity",
        url: "https://youtu.be/FPu9Uld7W-E",
      },
      {
        title: "String",
        url: "https://www.geeksforgeeks.org/introduction-to-strings-data-structure-and-algorithm-tutorials/",
      },
      {
        title: "Array",
        url: "https://www.geeksforgeeks.org/array-data-structure/",
      },
      {
        title: "Sorting",
        url: "https://www.geeksforgeeks.org/introduction-to-sorting-algorithm/",
      },
      {
        title: "Number Theory (only till number theory)",
        url: "https://youtube.com/playlist?list=PLauivoElc3giVROwL-6g9hO-LlSen_NaV&feature=shared",
      },
      {
        title: "Number Theory GFG",
        url: "https://www.geeksforgeeks.org/number-theory-competitive-programming/",
      },
      {
        title: "Maths CP Algorithms",
        url: "https://cp-algorithms.com/algebra/binary-exp.html",
      },
      {
        title: "Combinatorics CP Algorithms",
        url: "https://cp-algorithms.com/algebra/factorial-divisors.html",
      },
    ],
    questions: [
      {
        title: "Sort The Array | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/sort-the-array0055/1",
      },
      {
        title: "Minimum Operations to Make the Array Increasing - LeetCode",
        url: "https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/",
      },
      {
        title: "Sort an array of 0s, 1s and 2s | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1",
      },
      {
        title: "Permutations of a given string | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/permutations-of-a-given-string2041/1",
      },
      {
        title:
          "Program to count occurrence of a given character in a string - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/program-count-occurrence-given-character-string/",
      },
      {
        title:
          "Find the only repetitive element between 1 to N-1 - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/find-repetitive-element-1-n-1/",
      },
      {
        title: "Plus One - LeetCode",
        url: "https://leetcode.com/problems/plus-one/description/",
      },
      {
        title:
          "Partition a number into two divisible parts | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/partition-a-number-into-two-divisible-parts3605/1",
      },
      {
        title: "Opposites Attract | CF",
        url: "https://codeforces.com/contest/131/problem/B",
      },
      {
        title: "Merge it | CF",
        url: "https://codeforces.com/contest/1176/problem/B",
      },
      {
        title: "GCD Permutations | CodeChef",
        url: "https://www.codechef.com/problems/NAS_2523",
      },
      {
        title: "No. of Dragons | CF",
        url: "https://codeforces.com/contest/148/problem/A",
      },
      {
        title: "Common Divs | CF",
        url: "https://codeforces.com/contest/1203/problem/C",
      },
    ],
  },
  {
    weekNumber: 2,
    topics: "Bit Manipulation, 2 Pointer, Sliding Window",
    resources: [
      {
        title: "Bit Manipulation Playlist",
        url: "https://youtube.com/playlist?list=PLauivoElc3giVROwL-6g9hO-LlSen_NaV&feature=shared",
      },
      {
        title: "Bit Manipulation (GFG)",
        url: "https://www.geeksforgeeks.org/bit-manipulation-for-competitive-programming/",
      },
      {
        title: "Two Pointer Technique (Videos)",
        url: "https://youtu.be/ijKmiFqjzi4?feature=shared",
      },
      {
        title: "Sliding Window (Videos)",
        url: "https://youtube.com/playlist?list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&feature=shared",
      },
      {
        title: "Two Pointer (GFG)",
        url: "https://www.geeksforgeeks.org/dsa/two-pointers-technique/",
      },
      {
        title: "Sliding Window (GFG)",
        url: "https://www.geeksforgeeks.org/dsa/window-sliding-technique/",
      },
      {
        title: "Extra Resource - Two Pointer (USACO guide)",
        url: "https://usaco.guide/silver/two-pointers?lang=cpp",
      },
    ],
    questions: [
      {
        title:
          "Calculate Bitwise OR of two integers from their given Bitwise AND and Bitwise XOR values - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/calculate-bitwise-or-of-two-integers-from-their-given-bitwise-and-and-bitwise-xor-values/",
      },
      {
        title:
          "Print all bitwise subsets of a number N | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/print-all-bitwise-subsets-of-a-number-n3301/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article",
      },
      {
        title: "Single Number | Leetcode",
        url: "https://leetcode.com/problems/single-number/",
      },
      {
        title: "Append OR | CodeChef",
        url: "https://www.codechef.com/problems/APPENDOR",
      },
      {
        title: "XXOORR | CodeChef",
        url: "https://www.codechef.com/problems/XXOORR",
      },
      {
        title:
          "Find the only repetitive element between 1 to N-1 - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/find-repetitive-element-1-n-1/",
      },
      {
        title: "Plus One - LeetCode",
        url: "https://leetcode.com/problems/plus-one/description/",
      },
      {
        title:
          "Partition a number into two divisible parts | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/partition-a-number-into-two-divisible-parts3605/1",
      },
      {
        title: "Container With Most Water",
        url: "https://leetcode.com/problems/container-with-most-water/description/",
      },
      {
        title: "Sliding Window Distinct Values",
        url: "https://cses.fi/problemset/task/3222",
      },
      {
        title: "Sum of Two Values",
        url: "https://cses.fi/problemset/task/1640",
      },
    ],
  },
  {
    weekNumber: 3,
    topics: "Greedy, Binary Search",
    resources: [
      {
        title: "Greedy Algo | Videos",
        url: "https://youtu.be/bC7o8P_Ste4?si=l8v5BdTM6Y0lvypT",
      },
      {
        title: "Greedy Algo | Free Code Camp",
        url: "https://www.freecodecamp.org/news/greedy-algorithms/",
      },
      {
        title: "(Additional) Introduction to Greedy Algorithms | USACO Guide",
        url: "https://usaco.guide/bronze/intro-greedy",
      },
      {
        title: "Binary Search | GFG",
        url: "https://www.geeksforgeeks.org/binary-search/",
      },
      {
        title: "Binary Search On Answers | GFG",
        url: "https://www.geeksforgeeks.org/binary-search-on-answer-tutorial-with-problems/",
      },
      {
        title: "Binary Search | Video",
        url: "https://youtu.be/MHf6awe89xw?si=KNNioKEo4uCenH3j",
      },
      {
        title: "Binary Search on Answers| Video",
        url: "https://youtu.be/R_Mfw4ew-Vo?si=oDM2DV-bU5L9gQCh",
      },
    ],
    questions: [
      {
        title: "Acticity Selection| Practice | GFG",
        url: "https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1",
      },
      {
        title: "Job Sequencing | Practice | GFG",
        url: "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
      },
      {
        title:
          "Job SequencMinimum increment/decrement to make array non-Increasing | Practice | GFG",
        url: "https://www.geeksforgeeks.org/problems/minimum-incrementdecrement-to-make-array-non-increasing--170637/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article",
      },
      {
        title: "Problem - 1772C | Practice | Codeforces",
        url: "https://codeforces.com/problemset/problem/1772/C",
      },
      {
        title: "Problem - 1617C | Practice | Codeforces",
        url: "https://codeforces.com/problemset/problem/1617/C",
      },
      {
        title: "Problem - 719B | Practice | Codeforces",
        url: "https://codeforces.com/contest/719/problem/B",
      },
      {
        title: "Problem - 835B | Practice | Codeforces",
        url: "https://codeforces.com/contest/835/problem/B",
      },
      {
        title: "Rotation | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/rotation4723/1",
      },
      {
        title: "Aggressive Cows | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/aggressive-cows/0",
      },
      {
        title: "Peak Element | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/peak-element/1",
      },

      {
        title: "K Closest Elements | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/k-closest-elements3619/1",
      },
      {
        title: "Maximum Median | Practice | Codeforces",
        url: "https://codeforces.com/contest/1201/problem/C",
      },
      {
        title: "X - Subarrays | Practice | HackerEarth",
        url: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/x-subarrays-2-6179b2c0/",
      },
    ],
  },
  {
    weekNumber: 4,
    topics: "Recursion, Backtracking",
    resources: [
      {
        title: "Recursion | GFG",
        url: "https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/",
      },
      {
        title: "Backtracking | GFG",
        url: "https://www.geeksforgeeks.org/introduction-to-backtracking-data-structure-and-algorithm-tutorials/#what-is-backtracking",
      },
      {
        title: "Recursion | Video | Striver",
        url: "https://youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&si=ob2PtlMFJ0bmgGpF",
      },
      {
        title: "Recursion | Video | Hindi",
        url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY",
      },
      {
        title: "Backtracking | Video",
        url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWdbOTog8Jxk9XOjzUs3egMP",
      },
    ],
    questions: [
      {
        title: "Generate Parentheses | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/generate-all-possible-parentheses/1",
      },
      {
        title: "Print all combinations | Set-2 - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/",
      },
      {
        title: "Generate all binary strings | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1",
      },
      {
        title: "Sum of Nth Power  | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/express-as-sum-of-power-of-natural-numbers5647/1",
      },
      {
        title: "N-Queens Problem | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/n-queen-problem0315/1",
      },
      {
        title:
          "Longest Possible Route in a Matrix with Hurdles | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/longest-possible-route-in-a-matrix-with-hurdles/1",
      },
      {
        title: "Partition Array to K Subsets | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
      },
      {
        title: "Largest Number in K Swaps | Practice | GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1",
      },
    ],
    note: "Focus on the Recursion part completely if you think you can't complete backtracking. Else try to do both.",
  },
];
