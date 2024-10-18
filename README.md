> [time=Fri, Oct 27, 2023 2:31 PM]
### Proof of AM-GM inequality
:::info
Let $a_1,a_2,\dots,a_k$ be all posivitive integers, denote $A,G$ as the arithmetic mean and geometric mean of $a_1,a_2,\dots,a_k$,respectively. Then $A \ge G$ 
:::
Proof.
>Claim: $k = 2^n, n \in \mathbb{N}$, the inequality hold

Proof of claim: let n = 1, then by $(\sqrt{a_2}-\sqrt{a_1})^2 \ge 0$, we have $\frac{a_1+a_2}{2} \ge \sqrt{a_1a_2}$. Hence the claim hold.

Suppose at some value of $n$, this claim hold, namely,
$$A=\frac{a_1+a_2+\dots+a_{2^n}}{2^n} \ge \left(a_1a_2\dots a_{2^n}\right)^{1/2^n}=GM$$
Then, for case $n+1$
$$\begin{align}  \\
A & = \frac{a_1+a_2+\dots+a_{2^n}+a_{2^n+1}+\dots+a_{2^n+1}+a_{2^{n+1}}}{2^{n+1}} \\
&= \frac{\left(\frac{a_1+a_2+\dots+a_{2^n}}{2^n}\right) + \left(\frac{a_{2^n+1}+\dots+a_{2^n+1}+a_{2^{n+1}}}{2^n}\right)}{2}\\
& \ge_{\text{(by hypothesis that n hold)}} \sqrt{(a_1a_2\dots a_{2^n})^{1/2^n} (a_{2^n+1} a_{2^n+2} \dots a_{2^{n+1}})^{1/2^n}} \\
&=\left(a_1a_2\dots a_{2^{n+1}}  \right)^{1/{2^n}} = G
\end{align}$$
Therefore, AM-GM ineq. hold for $k$ as a power of two.

---

For cases where $k \in \mathbb{N}$, choose $n$ such that $2^n \ge k$.
$$\begin{cases}
A = \frac{a_1 + a_2 + \dots + a_k}{k} \\
G = (a_1 a_2 \dots a_k)^{1/k} \\
\end{cases}$$
Consider a true-by-claim inequality, $$\frac{(a_1+a_2+\dots +a_k)+ (a_{k+1} + a_{k+2} + \dots + a_{2^n})}{2^n} \ge (a_1 a_2\dots a_k  a_{k+1}  a_{k+2}  \dots  a_{2^n})^{1/2^n}$$
Take $A = a_{k+1} = a_{k+2} = \dots = a_{2^n}$, we have
$$\begin{align}
\frac{a_1+a_2+\dots + a_k + (2^n-k)A}{2^n} & \ge (a_1 \dots a_k A^{2^n-k})^{1/2^k} \\
\implies A & \ge (a_1 \dots a_k)^{1/2^n} A^{1-{k/2^n}} \\
\implies A & \ge G \text{, by simplification}
\end{align}$$
Q.E.D.
