import React from 'react';
import Container from '@material-ui/core/Container';
export default function BuyHatke(props) {

return (


<Container>

<h3 >Samsung Bangalore R&D (On campus for FTE)</h3>
<span style={{fontWeight:'bold'}}>Online Round : </span>It was a 3 hour
 long contest and we were given one problem to solve in the given time.
 <br/>
 <span style={{fontWeight:'bold'}}>Question: </span><br/>
 Every point in the universe is represented by (x, y) co-ordinates . 
 The distance between two points -(x1, y1) and (x2, y2) can be 
 calculated as abs(x1-x2)+abs(y1-y2) . Now there are n warmholes,
every warmhole is described by 3 details .
 <br/>
 Co-ordinates of one end of warmhole, co-ordinates of other end of warmhole and cost of 
traveling through the warmhole. Now we are given a source and a
 destination and we have to calculate minimum time to go from source
  to destination by using any number of warmholes (possibly zero).
  <br/>
Constraints-<br/>
N&lt;5 (number of warmholes)
Co-ordinates of every point: (x, y) x&lt;&#61;1000, y&lt;&#61;1000
This problem can be solved by constructing the adjacency matrix and 
then applying any shortest path algorithm, I used Floyd Warshall .

<p>28 students were shortlisted after this.</p>

<span style={{fontWeight:'bold'}}>First technical round (F2F):</span>
<br/>
<p>First of all the interviewer asked about my project. He wanted to 
know about the details so we had a long discussion of about
 20 -25 minutes on this.Then he gave me some conditions and asked
  how I would have handled those conditions and what changes were 
  necessary in my project to satisfy those conditions .</p>

  <p>He asked me one very simple question on DS, it was spiral traversal 
        of a matrix – Print matrix in spiral form</p>

<p>He then switched to Operating System questions</p> 

<ol>
<li>Difference between mutex and semaphores: 
      https://www.geeksforgeeks.org/mutex-vs-semaphore/</li>

<li>What is a critical section:
       https://www.geeksforgeeks.org/g-fact-70/</li>

<li>What are system calls. Name some popular system calls.
       Why are they necesaary?</li>

<li>What is a kernel?</li>

<li>Different solutions to critical section problem and how they work.</li>

<li>Code and explanation using diagram of Peterson solution.This round
       was almost 1 hr long. He was a very senior interviewer and asked 
       lot of things related to my 3 years in the college.</li>


</ol>

<span style={{fontWeight:'bold'}}>Second technical round (F2F):</span><br/>

<p>The interviewer asked me if I knew what BSTs and heaps are.</p>

<p>He asked me which of the two will be used for priority based
       scheduling. Then he asked me the time complexity for deletion 
       of any key in a heap and the actual algorithm to do it.</p>

<p>He asked me about sampling and quantization (Computer Networks).
He asked me some more questions on Networks and I told him I did not 
know much about it.</p>

<p>Next, he asked me if I knew what trie data structute is. I 
      replied positively and he asked me the following questions:</p>

<ol>
<li>How will you know the actual number of nodes required in the trie 
      without actually constructing the trie. I gave him an answer by 
      sorting the strings lexographically. He asked me how I arrived at 
      the approach and he was satisfied by my approach.</li>

<li>Given a matrix of (n*m) where n1000 && m1000 .
 Every cell has either 0 or 1.
 <p>The question was to find if two rows are identical or not. First 
       of all I came with a very naive solution by making strings out 
       of each row and maintaing a hash map to check whether a string 
       pattern occurs more than once. He asked for an optimized solution
        and I finally came up with a solution using binary trie. He was 
        looking for this solution and he was satisfied.</p>
 
 </li> </ol>

 <p>The question was to find if two rows are identical or not. 
       First of all I came with a very naive solution by making strings
        out of each row and maintaing a hash map to check whether a 
        string pattern occurs more than once. He asked for an optimized
         solution and I finally came up with a solution using binary 
         trie. He was looking for this solution and he was satisfied.</p> 
<br/>

<p>Operating System-</p>

<ol>
<li>
What is a zombie process:
 https://www.geeksforgeeks.org/zombie-and-orphan-processes-in-c/
</li>

<li>
Write code in C to create a zombie process.    
</li>

<li>
How to avoid a zombie process.   
</li>

</ol>

<p>He asked me a very famous puzzle:
https://www.geeksforgeeks.org/puzzle-1-how-to-measure-45-minutes-using-two-identical-wires/
I was not able to answer it.</p>

<p>He then asked me a general question that why are man holes cover 
      round and not square in shape.</p>


<span style={{fontWeight:'bold'}}>HR Round-</span><br/>
<p>It was a pure HR round .</p>
<p>I was asked what do you know about our work .</p>
<p>Why Samsung and if not Samsung then which company?.</p>
<p>Questions on family background and if I was okay with the location.</p>
<p>At last he told me the total salary breakup.</p>
<p>All the interviewers were very supportive and made me very
       comfortable.</p>

       <p>Results were announced after a while.</p>
       <p>Total 8 people were selected and I was one of them .</p>







</Container>



);
}