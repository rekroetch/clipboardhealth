# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I refactored the code to follow a more logical progression.  If the function receives no input, it returns the Trival_Partition_Key.  If anything at all is passed in, even an empty object, the function then handles that in order.  If a partitionKey is in the object, the candidate is assigned that value, then it is modified if it needs to be strigified or if it is longer than the Max_Partition_Key_Length.  Finally if an empty object is passed in, the canditated is assigned a random hash code. Then the function returns the candidate variable. 
