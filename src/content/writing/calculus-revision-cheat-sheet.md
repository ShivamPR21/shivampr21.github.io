---
title: "Calculus: Integrals, Derivatives and Tensor Operators"
description: "A detailed reference to integration, differentiation, Einstein notation, automatic differentiation, and integral operators, with assumptions and worked derivations."
date: 2026-10-28
author: Shivam Pandey
categories: [Mathematics, Calculus, Autodiff]
series: Mathematical Foundations
publication: immortal-machine
seriesOrder: 1
draft: false
---

Part of [Immortal Machine](/immortal-machine/) · Mathematical Foundations

Composition produces chain rules. Products produce integration-by-parts identities. Pairings produce adjoints. These relationships organise much of the calculus behind learning systems, from elementary functions to tensor contractions and continuous operators.

This reference collects the formulas together with their assumptions, derivations, and failure cases. Start with the standard integration and differentiation methods, then follow the index notation into tensor derivatives, forward and reverse accumulation, and their integral-operator counterparts.

## Contents

- [Foundations and essential limits](#foundations-and-essential-limits) — Notation, limits, identities, series convergence and interchange rules.
- [Integral calculus](#integral-calculus) — Antiderivatives, substitution, integration by parts, partial fractions, trigonometric techniques, improper integrals, special integrals, tensor-valued integration, kernel operators, adjoints, functional Hessians and quadrature.
- [Differential calculus](#differential-calculus) — Derivative tables, implicit and logarithmic methods, higher derivatives, curves, extrema, Taylor expansions, Einstein notation, tensor derivatives, forward and reverse autodiff, mixed-mode derivatives and numerical differentiation.
- [Multivariable vector and matrix calculus](#multivariable-vector-and-matrix-calculus) — Gradients, Hessians, constraints, multiple integrals, vector theorems, matrix derivatives and expectation gradients.
- [Advanced connections](#advanced-connections) — Differential equations, variational calculus, transforms, generalized derivatives, complex integration and Monte Carlo.
- [Revision checklist and self test](#revision-checklist-and-self-test) — Memorization map, error checklist, twenty-six revision problems, answers and references.

## Foundations and essential limits

- [F.1 Scope, notation and how to use the sheet](#f1-scope-notation-and-how-to-use-the-sheet)
- [F.2 Limits and continuity](#f2-limits-and-continuity)
- [F.3 Algebra and trigonometry that make calculus easier](#f3-algebra-and-trigonometry-that-make-calculus-easier)
- [F.4 Sequences, series and convergence](#f4-sequences-series-and-convergence)
- [F.5 When operations may be interchanged](#f5-when-operations-may-be-interchanged)

### F.1 Scope, notation and how to use the sheet

This is a broad revision reference for standard university calculus: single-variable integration and differentiation, limits and series, multivariable and vector calculus, and selected matrix, probability and variational extensions. It groups formulas with their hypotheses, recognition patterns and worked examples. Individual special-function tables, full differential-equation theory, complex analysis and measure theory each require their own references; the advanced appendix identifies their most useful connections.

**For a fast revision pass:** read the method-selection tables, the elementary derivative and antiderivative tables, the fundamental theorem, substitution, integration by parts, Taylor's theorem, and the final error checklist. Then revise the worked examples without looking at their solutions.

**For a deeper pass:** derive substitution from the chain rule and integration by parts from the product rule; then extend them to tensor derivative maps, integral kernels, adjoints and boundary-integral identities. Sections I.16–I.22 and D.22–D.29 develop the continuous and discrete operator viewpoints using arbitrary index blocks before specializing to familiar arrays.

Conventions:

- Variables are real unless a complex transform is explicitly introduced.
- Trigonometric arguments are in **radians**. If $x$ is measured in degrees, differentiating $\sin(\pi x/180)$ introduces $\pi/180$.
- $\ln$ denotes natural logarithm; $\log_b$ has base $b>0$, $b\ne1$.
- $C$ is an arbitrary integration constant. On a disconnected domain, different connected intervals may have different constants.
- $[F(x)]_a^b=F(b)-F(a)$. A definite integral has a value, not an added arbitrary constant.
- $f^{(n)}$ is the $n$th derivative, not the $n$th power.
- $\arcsin x$ means an inverse function; $\csc x=1/\sin x$ means a reciprocal. Avoid ambiguous $\sin^{-1}x$ notation.
- $C^k$ means the derivatives through order $k$ are continuous; $C^\infty$ means smooth of every order. Smoothness alone does **not** imply equality with a Taylor series.
- An identity is used on an interval where all its expressions are defined. Do not continue an antiderivative across a singularity without separately checking the integral.
- Gradients are column vectors. For $\mathbf f:\mathbb R^n\to\mathbb R^m$, the Jacobian has shape $m\times n$.
- “Sufficient conditions” are convenient assumptions guaranteeing a result; they need not be the weakest possible assumptions.

#### The major correspondences

| Differentiation operation | Integration counterpart | Central identity |
|---|---|---|
| Linearity | Linearity | $\int(af+bg)=a\int f+b\int g$ |
| Chain rule | Substitution | $\int f(g(x))g'(x)\,dx=F(g(x))+C$ |
| Product rule | Integration by parts | $\int u\,dv=uv-\int v\,du$ |
| Derivative of accumulation | Fundamental theorem | $\frac{d}{dx}\int_a^x f(t)\,dt=f(x)$ |
| Multivariable chain rule | Change of variables | $dV=\lvert\det J\rvert\,dU$ |
| Gradient, curl and divergence | Boundary integral theorems | Interior derivatives become boundary contributions |
| Differentiating a function | Varying a functional | Integration by parts produces the Euler–Lagrange equation |

### F.2 Limits and continuity

#### Definitions

The statement $\lim_{x\to a}f(x)=L$ means:

$$
\forall\varepsilon>0\ \exists\delta>0:
\quad 0<|x-a|<\delta\Longrightarrow |f(x)-L|<\varepsilon.
$$

The value at $a$ may be undefined or different from $L$. A two-sided limit exists exactly when the two one-sided limits exist and agree.

Continuity at $a$ requires all three:

$$
f(a)\text{ is defined},\qquad
\lim_{x\to a}f(x)\text{ exists},\qquad
\lim_{x\to a}f(x)=f(a).
$$

At an endpoint, use continuity relative to the domain. Differentiability at an interior point implies continuity there; the reverse implication fails, for example for $|x|$ at $0$.

If finite limits exist, sums and products pass through the limit. Quotients do so if the limiting denominator is nonzero. Continuous functions preserve limits.

#### Core limit tools

| Situation | First useful tool |
|---|---|
| Polynomial or continuous composition | Direct substitution |
| Rational $0/0$ | Factor, cancel on a punctured neighbourhood, then take the limit |
| Difference of radicals | Multiply by a conjugate |
| Oscillation multiplied by a vanishing factor | Squeeze theorem |
| Leading growth at infinity | Divide by the dominant term |
| $0/0$ or $\infty/\infty$ after inspection | Taylor expansion or L'Hôpital with its hypotheses |
| Variable power | Take logarithms on a positive domain |
| Several variables | Prove a uniform bound; paths can disprove a limit but a few agreeing paths cannot prove one |

**Squeeze theorem:** if $g(x)\le f(x)\le h(x)$ near $a$ and both outer functions approach $L$, then $f(x)\to L$.

#### Standard limits and equivalent infinitesimals

As $x\to0$:

$$
\frac{\sin x}{x}\to1,\qquad
\frac{\tan x}{x}\to1,\qquad
\frac{1-\cos x}{x^2}\to\frac12,
$$

$$
\frac{e^x-1}{x}\to1,\qquad
\frac{\ln(1+x)}{x}\to1,\qquad
\frac{(1+x)^\alpha-1}{x}\to\alpha,
$$

where $\alpha$ is fixed and the real expression is defined.

$$
\frac{\arcsin x}{x}\to1,\qquad
\frac{\arctan x}{x}\to1,\qquad
\frac{\sinh x}{x}\to1,\qquad
\frac{\cosh x-1}{x^2}\to\frac12.
$$

Useful exponential limits:

$$
\lim_{x\to0}(1+x)^{1/x}=e,\qquad
\lim_{n\to\infty}\left(1+\frac an\right)^n=e^a.
$$

For $p,q,c>0$:

$$
\frac{(\ln x)^p}{x^q}\to0,\qquad
\frac{x^p}{e^{cx}}\to0
\quad (x\to\infty),
$$

and $x^p\ln x\to0$ as $x\to0^+$.

**Equivalent infinitesimals may be substituted safely in products and quotients when the ratio argument is valid. Cancellation in sums or differences needs more terms.** For example $\sin x\sim x$ does not determine $\sin x-x$; in fact

$$
\sin x-x=-\frac{x^3}{6}+O(x^5).
$$

#### Big O, little o and asymptotic equivalence

As $x\to a$:

$$
f=O(g)\iff |f(x)|\le M|g(x)|\text{ sufficiently near }a;
$$

$$
f=o(g)\iff f/g\to0,\qquad f\sim g\iff f/g\to1,
$$

with ratios taken where defined. For example:

$$
e^x=1+x+\frac{x^2}{2}+O(x^3),\qquad
\ln(1+x)=x+o(x).
$$

#### Two existence theorems to remember

**Intermediate value theorem:** a continuous function on $[a,b]$ takes every value between $f(a)$ and $f(b)$.

**Extreme value theorem:** a continuous function on a compact interval $[a,b]$ attains a global maximum and minimum. An open interval or a discontinuous function does not automatically have this property.

### F.3 Algebra and trigonometry that make calculus easier

These identities often do more work than a new integration technique.

$$
\sin^2x+\cos^2x=1,\qquad
1+\tan^2x=\sec^2x,\qquad
1+\cot^2x=\csc^2x.
$$

$$
\sin2x=2\sin x\cos x,\qquad
\cos2x=1-2\sin^2x=2\cos^2x-1.
$$

$$
\sin^2x=\frac{1-\cos2x}{2},\qquad
\cos^2x=\frac{1+\cos2x}{2}.
$$

$$
\sin A\cos B=\frac{\sin(A+B)+\sin(A-B)}2,
$$

$$
\cos A\cos B=\frac{\cos(A-B)+\cos(A+B)}2,
$$

$$
\sin A\sin B=\frac{\cos(A-B)-\cos(A+B)}2.
$$

Completing the square:

$$
ax^2+bx+c
=a\left(x+\frac b{2a}\right)^2+
\frac{4ac-b^2}{4a},\qquad a\ne0.
$$

A square root of a square is an absolute value:

$$
\sqrt{x^2}=|x|,\qquad
\sqrt{a^2\cos^2\theta}=|a\cos\theta|.
$$

Logarithmic rules apply with their real domains:

$$
\ln(uv)=\ln u+\ln v\quad(u,v>0),\qquad
\ln|uv|=\ln|u|+\ln|v|\quad(uv\ne0).
$$

Hyperbolic definitions and identities:

$$
\sinh x=\frac{e^x-e^{-x}}2,\qquad
\cosh x=\frac{e^x+e^{-x}}2,\qquad
\tanh x=\frac{\sinh x}{\cosh x},
$$

$$
\cosh^2x-\sinh^2x=1,\qquad
1-\tanh^2x=\operatorname{sech}^2x.
$$

### F.4 Sequences, series and convergence

A sequence $(a_n)$ converges if $a_n\to L$. A series $\sum_{n=1}^{\infty}a_n$ converges if its partial sums converge. These are different questions.

**Necessary condition:** if $\sum a_n$ converges, then $a_n\to0$. The converse fails: the harmonic series $\sum1/n$ diverges.

| Test or series | Statement and conditions |
|---|---|
| Geometric | $\sum_{n=0}^{\infty}ar^n=a/(1-r)$ for $\lvert r\rvert<1$ |
| $p$ series | $\sum_{n=1}^{\infty}1/n^p$ converges iff $p>1$ |
| Telescoping | Expand partial sums and keep the uncancelled endpoint terms |
| Direct comparison | $0\le a_n\le b_n$: convergence of $\sum b_n$ implies that of $\sum a_n$; divergence of the smaller implies divergence of the larger |
| Limit comparison | $a_n,b_n>0$ and $a_n/b_n\to L\in(0,\infty)$: both have the same convergence behaviour |
| Ratio | If $\lvert a_{n+1}/a_n\rvert\to L$, then $L<1$ gives absolute convergence, $L>1$ gives divergence, and $L=1$ is inconclusive |
| Root | With $L=\limsup\lvert a_n\rvert^{1/n}$, $L<1$ gives absolute convergence, $L>1$ gives divergence, and $L=1$ is inconclusive |
| Integral test | If $f$ is positive, continuous and eventually decreasing and $a_n=f(n)$, then $\sum a_n$ and $\int f(x)\,dx$ have the same convergence behaviour |
| Alternating | If $b_n\downarrow0$, then $\sum(-1)^{n-1}b_n$ converges; the remainder magnitude is at most the first omitted $b_n$ |
| Dirichlet | If partial sums of $a_n$ are bounded and $b_n\downarrow0$, then $\sum a_nb_n$ converges |
| Abel | If $\sum a_n$ converges and $(b_n)$ is monotone and bounded, then $\sum a_nb_n$ converges |
| Cauchy condensation | For nonnegative decreasing $a_n$, $\sum a_n$ and $\sum 2^n a_{2^n}$ converge or diverge together |

For a decreasing positive $f$, the integral-test remainder after $N$ terms satisfies:

$$
\int_{N+1}^{\infty}f(x)\,dx
\le\sum_{n=N+1}^{\infty}f(n)
\le\int_N^\infty f(x)\,dx.
$$

**Absolute convergence** means $\sum|a_n|<\infty$ and implies convergence. A convergent series that is not absolutely convergent is **conditionally convergent**. Rearrangements of a conditionally convergent series need not preserve its sum.

#### Power series

For $\sum_{n=0}^{\infty}c_n(x-a)^n$, the radius of convergence is

$$
R=\frac1{\limsup_{n\to\infty}|c_n|^{1/n}},
$$

with the usual conventions $1/0=\infty$ and $1/\infty=0$. Inside $|x-a|<R$ the series converges absolutely; outside it diverges. **Check the endpoints separately.**

Termwise differentiation and integration are valid strictly inside the radius:

$$
\frac{d}{dx}\sum_{n=0}^{\infty}c_n(x-a)^n
=\sum_{n=1}^{\infty}nc_n(x-a)^{n-1},
$$

$$
\int\sum_{n=0}^{\infty}c_n(x-a)^n\,dx
=C+\sum_{n=0}^{\infty}\frac{c_n}{n+1}(x-a)^{n+1}.
$$

The derived series have the same radius; endpoint convergence may change. Taylor coefficients and core Maclaurin series appear in the differential-calculus chapter.

### F.5 When operations may be interchanged

Moving a limit, derivative, infinite sum or integral through another operation is a theorem application, not a purely algebraic move.

| Desired step | A useful sufficient hypothesis |
|---|---|
| $\lim_n\int_a^b f_n=\int_a^b\lim_n f_n$ | Uniform convergence on $[a,b]$ with integrable $f_n$ |
| $\lim_n\int f_n=\int f$ on a measure space | Dominated convergence: $f_n\to f$ almost everywhere and $\lvert f_n\rvert\le g$ with $\int g<\infty$ |
| $\int\lim_n f_n=\lim_n\int f_n$ allowing $+\infty$ | Monotone convergence: measurable $0\le f_n\uparrow f$ |
| $\int\sum f_n=\sum\int f_n$ | For example $\sum\int\lvert f_n\rvert<\infty$, or nonnegative terms using Tonelli |
| $(\lim_n f_n)'=\lim_n f_n'$ | On a compact interval, $f_n\in C^1$, $f_n(x_0)$ converges at one point, and $f_n'$ converges uniformly |
| Differentiate an integral over a fixed domain | Measurability, integrability at a reference parameter, differentiability in the parameter, and a locally uniform integrable bound on its parameter derivative |
| Reverse the order of integration | Absolute integrability, or nonnegativity with extended values allowed |
| Swap mixed partial derivatives | Continuous second partial derivatives in a neighbourhood are sufficient |

**Counterexample to an unchecked limit swap.** Let $f_n(x)=n$ for $0<x<1/n$ and $0$ otherwise on $[0,1]$. Then $f_n(x)\to0$ at every point, but

$$
\int_0^1f_n(x)\,dx=1
\quad\text{for every }n,
\qquad
\int_0^1\lim_n f_n(x)\,dx=0.
$$

**Uniform convergence of functions alone does not permit differentiation.** On $[-1,1]$, $f_n(x)=\sin(nx)/n\to0$ uniformly, while $f_n'(0)=1$ for every $n$, differing from the derivative of the limit.

#### Integral inequalities worth remembering

Whenever the displayed integrals exist:

$$
\left|\int f\right|\le\int|f|.
$$

Cauchy–Schwarz:

$$
\left|\int fg\right|
\le\left(\int|f|^2\right)^{1/2}
   \left(\int|g|^2\right)^{1/2}.
$$

Hölder, for $p,q>1$ with $1/p+1/q=1$:

$$
\int|fg|
\le\left(\int|f|^p\right)^{1/p}
   \left(\int|g|^q\right)^{1/q}.
$$

Minkowski, for $1\le p<\infty$:

$$
\left(\int|f+g|^p\right)^{1/p}
\le
\left(\int|f|^p\right)^{1/p}
+
\left(\int|g|^p\right)^{1/p}.
$$

Jensen, for convex $\varphi$ and an integrable random variable $X$ for which the expectation is meaningful:

$$
\varphi(\mathbb E[X])\le\mathbb E[\varphi(X)].
$$

On $[a,b]$ with $a<b$, this becomes

$$
\varphi\!\left(\frac1{b-a}\int_a^b f(x)\,dx\right)
\le\frac1{b-a}\int_a^b\varphi(f(x))\,dx.
$$

## Integral calculus

- [I.1 What an integral means](#i1-what-an-integral-means)
- [I.2 Algebraic properties, bounds, and symmetry](#i2-algebraic-properties-bounds-and-symmetry)
- [I.3 Standard antiderivative tables](#i3-standard-antiderivative-tables)
- [I.4 Substitution: reverse the chain rule](#i4-substitution-reverse-the-chain-rule)
- [I.5 Integration by parts: reverse the product rule](#i5-integration-by-parts-reverse-the-product-rule)
- [I.6 Rational functions and partial fractions](#i6-rational-functions-and-partial-fractions)
- [I.7 Trigonometric powers and products](#i7-trigonometric-powers-and-products)
- [I.8 Radical substitutions and universal rationalization](#i8-radical-substitutions-and-universal-rationalization)
- [I.9 Reduction formulas](#i9-reduction-formulas)
- [I.10 Improper integrals and convergence](#i10-improper-integrals-and-convergence)
- [I.11 Special functions and important definite integrals](#i11-special-functions-and-important-definite-integrals)
- [I.12 Differentiation under the integral sign](#i12-differentiation-under-the-integral-sign)
- [I.13 Geometric and physical applications](#i13-geometric-and-physical-applications)
- [I.14 Numerical integration](#i14-numerical-integration)
- [I.15 A method-selection checklist](#i15-a-method-selection-checklist)
- [I.16 Tensor-valued integration and continuous contraction](#i16-tensor-valued-integration-and-continuous-contraction)
- [I.17 Integral operators: kernels, derivatives, and forward tangents](#i17-integral-operators-kernels-derivatives-and-forward-tangents)
- [I.18 Adjoint integral operators and reverse cotangents](#i18-adjoint-integral-operators-and-reverse-cotangents)
- [I.19 Nonlinear integrands, changing measures, and moving boundaries](#i19-nonlinear-integrands-changing-measures-and-moving-boundaries)
- [I.20 First variations, second variations, and functional Hessians](#i20-first-variations-second-variations-and-functional-hessians)
- [I.21 Quadrature as a tensor contraction](#i21-quadrature-as-a-tensor-contraction)
- [I.22 Integration by parts as an adjoint rule](#i22-integration-by-parts-as-an-adjoint-rule)

### I.1 What an integral means

An **antiderivative** of $f$ on an interval is a function $F$ satisfying $F'=f$. An **indefinite integral** denotes the entire family of antiderivatives:

$$
\int f(x)\,dx=F(x)+C.
$$

The constant is essential: differentiation erases constants. On a disconnected domain, the constant may differ between connected components. For example, antiderivatives of $1/x$ on $x<0$ and $x>0$ can have different constants.

A **definite integral** is a number representing signed accumulation:

$$
\int_a^b f(x)\,dx
=\lim_{\max_i\Delta x_i\to0}
\sum_{i=1}^n f(\xi_i)\Delta x_i,
\qquad
\xi_i\in[x_{i-1},x_i],
$$

when this Riemann limit exists. A continuous function on a closed, bounded interval is Riemann integrable; bounded piecewise continuous functions are also integrable. Integrability does not require differentiability or even continuity everywhere.

For $f\ge0$, the integral is area under the graph. For a sign-changing function, positive and negative contributions cancel:

$$
\text{signed area}=\int_a^b f(x)\,dx,
\qquad
\text{total geometric area}=\int_a^b \lvert f(x)\rvert\,dx.
$$

**Definite integration is more general than finding an elementary antiderivative.** A function may have an integral and an antiderivative even when neither can be expressed using elementary functions.

#### Fundamental theorem of calculus

**FTC, accumulation form.** If $f$ is continuous on $[a,b]$ and

$$
F(x)=\int_a^x f(t)\,dt,
$$

then $F'(x)=f(x)$ for $a<x<b$. At a discontinuity, the derivative need not equal the chosen point value of $f$.

**FTC, evaluation form.** If $f$ is continuous on $[a,b]$ and $G'=f$, then

$$
\boxed{\int_a^b f(x)\,dx=G(b)-G(a)=[G(x)]_a^b.}
$$

The basic cancellation identities are

$$
\frac{d}{dx}\int_a^x f(t)\,dt=f(x),
\qquad
\int_a^b F'(x)\,dx=F(b)-F(a),
$$

under the preceding hypotheses. More generally, the second identity holds when $F$ is absolutely continuous, with $F'$ interpreted almost everywhere; differentiability alone is not sufficient for every generalized version of the theorem.

#### Variable integration limits

For continuous $f$ and differentiable $u,v$,

$$
\boxed{
\frac{d}{dx}\int_{u(x)}^{v(x)} f(t)\,dt
=f(v(x))v'(x)-f(u(x))u'(x).
}
$$

Examples:

$$
\frac{d}{dx}\int_0^{x^2}\cos(t^3)\,dt
=2x\cos(x^6),
$$

$$
\frac{d}{dx}\int_x^{2x}e^{-t^2}\,dt
=2e^{-4x^2}-e^{-x^2}.
$$

When the integrand also depends on $x$, use the full Leibniz rule in §I.12.

### I.2 Algebraic properties, bounds, and symmetry

Assume all displayed integrals exist; for inequalities take $a<b$.

| Property | Formula |
|---|---|
| Linearity | $\int_a^b(\alpha f+\beta g)\,dx=\alpha\int_a^b f\,dx+\beta\int_a^b g\,dx$ |
| Reversed limits | $\int_b^a f\,dx=-\int_a^b f\,dx$ |
| Zero interval | $\int_a^a f\,dx=0$ |
| Interval splitting | $\int_a^b f\,dx=\int_a^c f\,dx+\int_c^b f\,dx$ |
| Order preservation | $f\le g\Rightarrow\int_a^b f\le\int_a^b g$ |
| Constant bounds | $m\le f\le M\Rightarrow m(b-a)\le\int_a^b f\le M(b-a)$ |
| Integral triangle inequality | $\left\lvert\int_a^b f\right\rvert\le\int_a^b\lvert f\rvert$ |
| Cauchy–Schwarz | $\left\lvert\int_a^b fg\right\rvert^2\le\left(\int_a^b f^2\right)\left(\int_a^b g^2\right)$ |
| Average value | $f_{\mathrm{avg}}=\frac1{b-a}\int_a^b f(x)\,dx$ |

**Integral mean value theorem.** If $f$ is continuous, some $c\in[a,b]$ satisfies

$$
\int_a^b f(x)\,dx=f(c)(b-a).
$$

Weighted version: if $f$ is continuous and $w$ is integrable with $w\ge0$, then

$$
\int_a^b f(x)w(x)\,dx=f(c)\int_a^b w(x)\,dx
$$

for some $c\in[a,b]$. If the weight integral is zero, both sides are zero.

#### Symmetry shortcuts

For an integrable function on $[-a,a]$:

$$
f(-x)=f(x)
\Rightarrow
\int_{-a}^a f(x)\,dx=2\int_0^a f(x)\,dx,
$$

$$
f(-x)=-f(x)
\Rightarrow
\int_{-a}^a f(x)\,dx=0.
$$

Reflection about the midpoint, sometimes called **King's property**, gives

$$
\int_a^b f(x)\,dx=\int_a^b f(a+b-x)\,dx.
$$

The name is informal; the identity itself is just the substitution $u=a+b-x$.

Therefore

$$
\int_a^b f(x)\,dx
=\frac12\int_a^b\bigl[f(x)+f(a+b-x)\bigr]\,dx.
$$

Useful consequences:

$$
f(x)+f(a+b-x)=K
\Rightarrow
\int_a^b f(x)\,dx=\frac{K(b-a)}2,
$$

$$
f(a+b-x)=f(x)
\Rightarrow
\int_a^b x f(x)\,dx
=\frac{a+b}{2}\int_a^b f(x)\,dx.
$$

Another frequently useful reflection identity is

$$
\boxed{
\int_a^b
\frac{f(x)}{f(x)+f(a+b-x)}\,dx=\frac{b-a}{2}.
}
$$

Require that the denominator is nonzero and the integrand is integrable throughout the interval, or that any exceptional points are removable and are handled appropriately. The reflected integrands add to $1$.

On $[0,\pi/2]$, reflection swaps sine and cosine:

$$
\int_0^{\pi/2}F(\sin x,\cos x)\,dx
=\int_0^{\pi/2}F(\cos x,\sin x)\,dx.
$$

For instance,

$$
\int_0^{\pi/2}\frac{\sin x}{\sin x+\cos x}\,dx=\frac\pi4.
$$

For a $T$-periodic integrable function, $T>0$,

$$
\int_c^{c+T}f(x)\,dx=\int_0^T f(x)\,dx,
\qquad
\int_c^{c+nT}f(x)\,dx=n\int_0^T f(x)\,dx
$$

for a positive integer $n$.

**Warning:** symmetry does not establish existence. The ordinary improper integral of $1/x$ over $[-1,1]$ diverges, despite oddness.

### I.3 Standard antiderivative tables

Every indefinite integral below has an additional $+C$. Arguments must lie in an interval on which the real-valued integrand is defined. Trigonometric arguments are in radians.

#### Powers, exponentials, logarithms

| Integrand | Antiderivative without $C$ | Conditions |
|---|---|---|
| $x^p$ | $\dfrac{x^{p+1}}{p+1}$ | $p\ne-1$, on a real differentiable branch |
| $1/x$ | $\ln\lvert x\rvert$ | $x\ne0$ |
| $(ax+b)^p$ | $\dfrac{(ax+b)^{p+1}}{a(p+1)}$ | $a\ne0,\ p\ne-1$ |
| $1/(ax+b)$ | $\dfrac1a\ln\lvert ax+b\rvert$ | $a\ne0$ |
| $e^{ax+b}$ | $\dfrac1a e^{ax+b}$ | $a\ne0$ |
| $q^{ax+b}$ | $\dfrac{q^{ax+b}}{a\ln q}$ | $q>0,\ q\ne1,\ a\ne0$ |
| $\ln x$ | $x\ln x-x$ | $x>0$ |
| $\ln\lvert x\rvert$ | $x\ln\lvert x\rvert-x$ | $x\ne0$ |
| $\log_q x$ | $\dfrac{x\ln x-x}{\ln q}$ | $x>0,\ q>0,\ q\ne1$ |
| $x^p\ln x$ | $\dfrac{x^{p+1}\ln x}{p+1}-\dfrac{x^{p+1}}{(p+1)^2}$ | $x>0,\ p\ne-1$ |
| $1/(x\ln x)$ | $\ln\lvert\ln x\rvert$ | $x>0,\ x\ne1$ |

The power law fails at $p=-1$ because division by $p+1$ is undefined; the answer is logarithmic.

#### Trigonometric functions

| Integrand | Antiderivative without $C$ |
|---|---|
| $\sin x$ | $-\cos x$ |
| $\cos x$ | $\sin x$ |
| $\tan x$ | $-\ln\lvert\cos x\rvert=\ln\lvert\sec x\rvert$ |
| $\cot x$ | $\ln\lvert\sin x\rvert$ |
| $\sec^2x$ | $\tan x$ |
| $\csc^2x$ | $-\cot x$ |
| $\sec x\tan x$ | $\sec x$ |
| $\csc x\cot x$ | $-\csc x$ |
| $\sec x$ | $\ln\lvert\sec x+\tan x\rvert$ |
| $\csc x$ | $-\ln\lvert\csc x+\cot x\rvert=\ln\lvert\tan(x/2)\rvert$ |
| $\tan^2x$ | $\tan x-x$ |
| $\cot^2x$ | $-\cot x-x$ |
| $\sin^2x$ | $x/2-\sin(2x)/4$ |
| $\cos^2x$ | $x/2+\sin(2x)/4$ |

For $f(ax+b)$, an antiderivative is $F(ax+b)/a$ when $F'=f$ and $a\ne0$. This scaling rule applies to every applicable table entry.

#### Hyperbolic functions

| Integrand | Antiderivative without $C$ |
|---|---|
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |
| $\tanh x$ | $\ln\cosh x$ |
| $\coth x$ | $\ln\lvert\sinh x\rvert$ |
| $\operatorname{sech}^2x$ | $\tanh x$ |
| $\operatorname{csch}^2x$ | $-\coth x$ |
| $\operatorname{sech}x\tanh x$ | $-\operatorname{sech}x$ |
| $\operatorname{csch}x\coth x$ | $-\operatorname{csch}x$ |
| $\operatorname{sech}x$ | $\arctan(\sinh x)$ |
| $\operatorname{csch}x$ | $\ln\lvert\tanh(x/2)\rvert$ |
| $\tanh^2x$ | $x-\tanh x$ |
| $\coth^2x$ | $x-\coth x$ |

#### Quadratics and inverse-function patterns

Take $a>0$.

| Integrand | Antiderivative without $C$ | Real-domain note |
|---|---|---|
| $\dfrac1{a^2+x^2}$ | $\dfrac1a\arctan(x/a)$ | All $x$ |
| $\dfrac1{\sqrt{a^2-x^2}}$ | $\arcsin(x/a)$ | $\lvert x\rvert<a$ |
| $\dfrac1{\sqrt{x^2+a^2}}$ | $\operatorname{arsinh}(x/a)=\ln(x+\sqrt{x^2+a^2})-\ln a$ | All $x$ |
| $\dfrac1{\sqrt{x^2-a^2}}$ | $\ln\lvert x+\sqrt{x^2-a^2}\rvert$ | $\lvert x\rvert>a$ |
| $\dfrac1{x^2-a^2}$ | $\dfrac1{2a}\ln\left\lvert\dfrac{x-a}{x+a}\right\rvert$ | $x\ne\pm a$ |
| $\dfrac1{a^2-x^2}$ | $\dfrac1{2a}\ln\left\lvert\dfrac{a+x}{a-x}\right\rvert$ | $x\ne\pm a$ |
| $\dfrac1{x\sqrt{x^2-a^2}}$ | $\dfrac1a\arccos\!\left(\dfrac a{\lvert x\rvert}\right)$ | $\lvert x\rvert>a$ |
| $\dfrac{x}{a^2+x^2}$ | $\dfrac12\ln(a^2+x^2)$ | All $x$ |
| $\dfrac{x}{\sqrt{a^2-x^2}}$ | $-\sqrt{a^2-x^2}$ | $\lvert x\rvert<a$ |
| $\dfrac{x}{\sqrt{x^2\pm a^2}}$ | $\sqrt{x^2\pm a^2}$ | Where the denominator is real and nonzero |
| $\dfrac1{(a^2+x^2)^{3/2}}$ | $\dfrac{x}{a^2\sqrt{a^2+x^2}}$ | All $x$ |
| $\dfrac1{(a^2-x^2)^{3/2}}$ | $\dfrac{x}{a^2\sqrt{a^2-x^2}}$ | $\lvert x\rvert<a$ |
| $\dfrac1{(x^2-a^2)^{3/2}}$ | $-\dfrac{x}{a^2\sqrt{x^2-a^2}}$ | $\lvert x\rvert>a$ |
| $\dfrac1{(a^2+x^2)^2}$ | $\dfrac{x}{2a^2(a^2+x^2)}+\dfrac1{2a^3}\arctan(x/a)$ | All $x$ |

The absolute value in the inverse-secant-type formula prevents a common sign error on $x<-a$.

On $\lvert x\rvert<a$, the logarithmic primitive of $1/(a^2-x^2)$ can also be written as $\operatorname{artanh}(x/a)/a$. On $x>a$, the primitive of $1/\sqrt{x^2-a^2}$ can be written as $\operatorname{arcosh}(x/a)$. These inverse-hyperbolic forms have narrower real domains than the corresponding logarithmic forms.

#### Square-root primitives

For $a>0$, on appropriate real intervals:

$$
\int\sqrt{a^2-x^2}\,dx
=\frac x2\sqrt{a^2-x^2}
+\frac{a^2}{2}\arcsin(x/a)+C,
$$

$$
\int\sqrt{x^2+a^2}\,dx
=\frac x2\sqrt{x^2+a^2}
+\frac{a^2}{2}\ln\!\left(x+\sqrt{x^2+a^2}\right)+C,
$$

$$
\int\sqrt{x^2-a^2}\,dx
=\frac x2\sqrt{x^2-a^2}
-\frac{a^2}{2}\ln\!\left\lvert x+\sqrt{x^2-a^2}\right\rvert+C.
$$

#### Integrals of inverse functions themselves

$$
\int\arcsin x\,dx=x\arcsin x+\sqrt{1-x^2}+C,
$$

$$
\int\arccos x\,dx=x\arccos x-\sqrt{1-x^2}+C,
$$

$$
\int\arctan x\,dx=x\arctan x-\frac12\ln(1+x^2)+C,
$$

$$
\int\operatorname{arsinh}x\,dx
=x\operatorname{arsinh}x-\sqrt{1+x^2}+C.
$$

$$
\int\operatorname{arcosh}x\,dx
=x\operatorname{arcosh}x-\sqrt{x^2-1}+C
\qquad(x>1),
$$

$$
\int\operatorname{artanh}x\,dx
=x\operatorname{artanh}x+\frac12\ln(1-x^2)+C
\qquad(\lvert x\rvert<1).
$$

These follow by integration by parts with $dv=dx$.

#### Reverse-chain-rule patterns: recognize these first

| Integrand | Antiderivative without $C$ |
|---|---|
| $f'(x)[f(x)]^p$ | $\dfrac{[f(x)]^{p+1}}{p+1}$, $p\ne-1$ |
| $f'(x)/f(x)$ | $\ln\lvert f(x)\rvert$ |
| $f'(x)e^{f(x)}$ | $e^{f(x)}$ |
| $f'(x)\cos f(x)$ | $\sin f(x)$ |
| $f'(x)\sin f(x)$ | $-\cos f(x)$ |
| $f'(x)/(1+f(x)^2)$ | $\arctan f(x)$ |
| $f'(x)/\sqrt{1-f(x)^2}$ | $\arcsin f(x)$ |
| $f'(x)\operatorname{sech}^2f(x)$ | $\tanh f(x)$ |

Each formula inherits the real-domain restrictions of its components.

### I.4 Substitution: reverse the chain rule

If $u=g(x)$, then $du=g'(x)\,dx$:

$$
\boxed{\int f(g(x))g'(x)\,dx=\int f(u)\,du.}
$$

After integrating, replace $u$ by $g(x)$ for an indefinite answer.

For a definite integral,

$$
\boxed{
\int_a^b f(g(x))g'(x)\,dx
=\int_{g(a)}^{g(b)}f(u)\,du,
}
$$

provided $g$ is continuously differentiable and $f$ is continuous on an interval containing the image of $g$. This direct chain-rule identity does **not** require $g$ to be one-to-one. In contrast, when solving for $x$ as a function of $u$, one must choose appropriate branches and split the interval if necessary.

**Worked example — substitution and changed bounds**

$$
\int_0^1 2x e^{x^2}\,dx
\overset{u=x^2}{=}\int_0^1 e^u\,du=e-1.
$$

**Worked example — a hidden derivative**

$$
\int\frac{x^3}{1+x^4}\,dx
=\frac14\ln(1+x^4)+C.
$$

Here $u=1+x^4$ and $du=4x^3dx$.

Useful substitutions beyond obvious inner functions:

| Structure | Candidate substitution |
|---|---|
| Rational function of $e^x$ | $u=e^x$, $dx=du/u$ |
| Rational function of $\ln x$ divided by $x$ | $u=\ln x$ |
| Fractional powers of $x$ | $x=t^m$, with $m$ a common denominator |
| $\sqrt{ax+b}$ | $u=\sqrt{ax+b}$ |
| Homogeneous ratios involving $x$ and a quadratic radical | $u=1/x$ or a radical substitution |
| Symmetric interval expressions | $u=a+b-x$ |

**Common traps:** changing $dx$ but not every occurrence of $x$; retaining old bounds with a new variable; forgetting a chain-rule factor; treating $\sqrt{x^2}$ as $x$ instead of $\lvert x\rvert$.

### I.5 Integration by parts: reverse the product rule

The product rule says

$$
d(uv)=u\,dv+v\,du.
$$

Integrating and rearranging gives

$$
\boxed{\int u\,dv=uv-\int v\,du.}
$$

The definite version is

$$
\boxed{
\int_a^b u(x)v'(x)\,dx
=[u(x)v(x)]_a^b-\int_a^b u'(x)v(x)\,dx.
}
$$

Continuous differentiability of $u,v$ is a simple sufficient condition. For improper endpoints, apply the identity on truncated proper intervals, then justify the limits; divergent terms cannot be canceled casually.

#### How to choose $u$ and $dv$

Choose $u$ so that differentiation simplifies it, and choose $dv$ so that it can be integrated.

**LIATE** is a useful heuristic for choosing $u$:

1. Logarithmic functions.
2. Inverse trigonometric functions.
3. Algebraic functions.
4. Trigonometric functions.
5. Exponential functions.

It is not a theorem or a universal priority rule. The real criterion is whether the new integral is easier.

#### Worked example — algebraic times exponential

$$
\int xe^x\,dx:
\quad u=x,\quad dv=e^x dx,\quad du=dx,\quad v=e^x.
$$

Therefore

$$
\int xe^x\,dx=xe^x-\int e^x dx=e^x(x-1)+C.
$$

#### Worked example — a function without an obvious product

Write $\ln x=(\ln x)\cdot1$:

$$
\int\ln x\,dx=x\ln x-\int x\frac1x\,dx=x\ln x-x+C.
$$

The same trick handles inverse trigonometric functions.

#### Integrating an inverse function

If $f$ is invertible and differentiable on an interval, with $f'\ne0$, and $F'=f$, then

$$
\boxed{
\int f^{-1}(y)\,dy
=y f^{-1}(y)-F(f^{-1}(y))+C.
}
$$

This follows by parts and the substitution $y=f(x)$. Here $f^{-1}$ means the inverse function, not $1/f$. An equivalent definite identity, with oriented limits, is

$$
\int_a^b f(x)\,dx
+\int_{f(a)}^{f(b)}f^{-1}(y)\,dy
=bf(b)-af(a).
$$

#### Repeated integration by parts and the tabular method

For $\int P(x)q(x)\,dx$, repeatedly differentiate $P$ and integrate $q$. If $Q_0=q$ and $Q_{k+1}'=Q_k$, then after $n$ steps,

$$
\int Pq\,dx
=\sum_{k=0}^{n-1}(-1)^kP^{(k)}Q_{k+1}
+(-1)^n\int P^{(n)}Q_n\,dx.
$$

When $P$ is a polynomial of degree $m$, choosing $n=m+1$ eliminates the remainder.

For example,

$$
\int x^3e^x\,dx
=e^x(x^3-3x^2+6x-6)+C.
$$

The tabular method records the alternating signs $+,-,+,-,\ldots$, derivatives of the polynomial, and successive antiderivatives of the other factor.

#### Cyclic integration by parts

Some integrals return to themselves after two applications. Let

$$
I=\int e^x\cos x\,dx.
$$

Integration by parts twice gives

$$
I=e^x\cos x+\int e^x\sin x\,dx
=e^x(\cos x+\sin x)-I.
$$

Thus

$$
I=\frac12e^x(\cos x+\sin x)+C.
$$

The general formulas, for real $a,b$ with $a^2+b^2>0$, are

$$
\boxed{
\int e^{ax}\cos bx\,dx
=\frac{e^{ax}}{a^2+b^2}(a\cos bx+b\sin bx)+C,
}
$$

$$
\boxed{
\int e^{ax}\sin bx\,dx
=\frac{e^{ax}}{a^2+b^2}(a\sin bx-b\cos bx)+C.
}
$$

#### Worked example — definite integral with an improper endpoint

For $p>-1$,

$$
\int_0^1 x^p\ln x\,dx
=\left[\frac{x^{p+1}\ln x}{p+1}\right]_0^1
-\frac1{p+1}\int_0^1x^p\,dx
=-\frac1{(p+1)^2},
$$

because $\lim_{x\to0^+}x^{p+1}\ln x=0$. The endpoint limit is part of the calculation.

### I.6 Rational functions and partial fractions

A rational function is $P(x)/Q(x)$, where $P,Q$ are polynomials.

**Step 1: polynomial division.** If $\deg P\ge\deg Q$, first write

$$
\frac{P}{Q}=S+\frac{R}{Q},
\qquad \deg R<\deg Q.
$$

**Step 2: factor the denominator over the reals.** Its factors are linear or irreducible quadratic.

**Step 3: include every required term.**

| Denominator factor | Partial-fraction terms |
|---|---|
| $(x-a)$ | $\dfrac A{x-a}$ |
| $(x-a)^m$ | $\dfrac{A_1}{x-a}+\dfrac{A_2}{(x-a)^2}+\cdots+\dfrac{A_m}{(x-a)^m}$ |
| $q(x)=ax^2+bx+c$, irreducible | $\dfrac{Bx+C}{q(x)}$ |
| $q(x)^m$, irreducible quadratic | $\dfrac{B_1x+C_1}{q(x)}+\cdots+\dfrac{B_mx+C_m}{q(x)^m}$ |

Multiply by the denominator and compare coefficients or substitute convenient values.

#### Worked example — repeated linear factor

$$
\frac1{x^2(x+1)}
=-\frac1x+\frac1{x^2}+\frac1{x+1}.
$$

Hence

$$
\int\frac{dx}{x^2(x+1)}
=-\ln\lvert x\rvert-\frac1x+\ln\lvert x+1\rvert+C.
$$

#### Quadratic numerators: separate a derivative

For $q(x)=ax^2+bx+c$, $a\ne0$, write

$$
px+r=\frac p{2a}(2ax+b)+\left(r-\frac{pb}{2a}\right).
$$

Then

$$
\int\frac{px+r}{q(x)}\,dx
=\frac p{2a}\ln\lvert q(x)\rvert
+\left(r-\frac{pb}{2a}\right)\int\frac{dx}{q(x)}.
$$

#### Completing the square

$$
ax^2+bx+c
=a\left[\left(x+\frac b{2a}\right)^2+\frac{4ac-b^2}{4a^2}\right].
$$

This turns a quadratic denominator into an arctangent, logarithmic, or repeated-pole form.

Let $\Delta=4ac-b^2$:

$$
\int\frac{dx}{ax^2+bx+c}
=
\begin{cases}
\displaystyle\frac2{\sqrt\Delta}
\arctan\left(\frac{2ax+b}{\sqrt\Delta}\right)+C,
&\Delta>0,\\[8pt]
\displaystyle-\frac2{2ax+b}+C,
&\Delta=0,\\[8pt]
\displaystyle\frac1{\sqrt{-\Delta}}
\ln\left\lvert
\frac{2ax+b-\sqrt{-\Delta}}{2ax+b+\sqrt{-\Delta}}
\right\rvert+C,
&\Delta<0.
\end{cases}
$$

These are valid on intervals avoiding denominator zeros.

**Worked example**

$$
\int\frac{dx}{x^2+4x+13}
=\int\frac{dx}{(x+2)^2+9}
=\frac13\arctan\frac{x+2}3+C.
$$

Every rational function has an elementary antiderivative consisting of a rational part, logarithms, and inverse tangents over the reals.

### I.7 Trigonometric powers and products

#### Identities to keep ready

$$
\sin^2x+\cos^2x=1,\quad
1+\tan^2x=\sec^2x,\quad
1+\cot^2x=\csc^2x.
$$

$$
\sin^2x=\frac{1-\cos2x}{2},
\qquad
\cos^2x=\frac{1+\cos2x}{2},
\qquad
\sin x\cos x=\frac12\sin2x.
$$

$$
\sin A\sin B=\frac{\cos(A-B)-\cos(A+B)}2,
$$

$$
\cos A\cos B=\frac{\cos(A-B)+\cos(A+B)}2,
$$

$$
\sin A\cos B=\frac{\sin(A+B)+\sin(A-B)}2.
$$

#### $\int\sin^m x\cos^n x\,dx$: nonnegative integer powers

| Case | Procedure |
|---|---|
| $m$ odd | Save one $\sin x\,dx$; convert remaining sine powers using $1-\cos^2x$; set $u=\cos x$ |
| $n$ odd | Save one $\cos x\,dx$; convert remaining cosine powers using $1-\sin^2x$; set $u=\sin x$ |
| Both even | Apply half-angle identities repeatedly |
| Both odd | Either substitution works; choose the shorter expansion |

**Worked example**

$$
\int\sin^3x\cos^2x\,dx
=\int(1-\cos^2x)\cos^2x\,\sin x\,dx
=-\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C.
$$

#### $\int\tan^m x\sec^n x\,dx$: nonnegative integer powers

| Case | Procedure |
|---|---|
| $n$ even and $n\ge2$ | Save $\sec^2x\,dx$, replace other $\sec^2x$ by $1+\tan^2x$, set $u=\tan x$ |
| $m$ odd and $n\ge1$ | Save $\sec x\tan x\,dx$, replace remaining $\tan^2x$ by $\sec^2x-1$, set $u=\sec x$ |
| Other cases | Rewrite with sine/cosine, use reduction, or integrate pure secant powers by parts |

Analogous rules apply to cotangent/cosecant, with

$$
d(\cot x)=-\csc^2x\,dx,\qquad
d(\csc x)=-\csc x\cot x\,dx.
$$

### I.8 Radical substitutions and universal rationalization

For $a>0$, these substitutions simplify quadratic radicals:

| Radical | Trigonometric substitution | Hyperbolic alternative |
|---|---|---|
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$ | Usually use the trigonometric form |
| $\sqrt{a^2+x^2}$ | $x=a\tan\theta$ | $x=a\sinh t$ |
| $\sqrt{x^2-a^2}$, $x>a$ | $x=a\sec\theta$ | $x=a\cosh t$ |

Choose a range for the new variable that fixes signs. For example, with $x=a\tan\theta$ and $-\pi/2<\theta<\pi/2$, $\sqrt{a^2+x^2}=a\sec\theta>0$. For $x<-a$ use a suitable negative branch; do not assume $\sqrt{x^2-a^2}=a\tan\theta$ without checking the sign.

**Worked example**

$$
\int\frac{dx}{\sqrt{x^2+a^2}}
\overset{x=a\sinh t}{=}
\int dt
=\operatorname{arsinh}(x/a)+C.
$$

#### Tangent half-angle substitution

For a rational function of $\sin x$ and $\cos x$, set

$$
t=\tan\frac x2.
$$

Then

$$
\boxed{
\sin x=\frac{2t}{1+t^2},\quad
\cos x=\frac{1-t^2}{1+t^2},\quad
dx=\frac{2\,dt}{1+t^2}.
}
$$

The integral becomes rational in $t$. This is also called the Weierstrass substitution. It is a systematic fallback, though it may be longer than a tailored identity. Split definite intervals at singularities of the substitution; finite points of the original integrand can map to infinite $t$.

#### Euler substitutions for a general quadratic radical

An expression rational in $x$ and $\sqrt{ax^2+bx+c}$ can often be rationalized:

- If $a>0$, set $\sqrt{ax^2+bx+c}=\sqrt a\,x+t$.
- If $c>0$, set $\sqrt{ax^2+bx+c}=tx+\sqrt c$.
- If the quadratic has a real root $r$, set $\sqrt{ax^2+bx+c}=t(x-r)$ on a suitable branch.

Squaring and canceling yields a rational expression for $x$ in $t$. Retain the branch restrictions from the original unsquared equation; squaring alone can introduce invalid signs.

### I.9 Reduction formulas

A reduction formula lowers an exponent or other parameter. The following indefinite recurrences are understood up to an additive constant.

#### Powers of sine and cosine

For integers $n\ge2$,

$$
S_n=\int\sin^n x\,dx
=-\frac{\sin^{n-1}x\cos x}{n}
+\frac{n-1}{n}S_{n-2},
$$

$$
C_n=\int\cos^n x\,dx
=\frac{\cos^{n-1}x\sin x}{n}
+\frac{n-1}{n}C_{n-2}.
$$

Base cases: $S_0=C_0=x$, $S_1=-\cos x$, $C_1=\sin x$.

#### Powers of tangent and secant

$$
T_n=\int\tan^n x\,dx
=\frac{\tan^{n-1}x}{n-1}-T_{n-2},
\qquad n\ge2,
$$

$$
E_n=\int\sec^n x\,dx
=\frac{\sec^{n-2}x\tan x}{n-1}
+\frac{n-2}{n-1}E_{n-2},
\qquad n\ge2.
$$

Base cases: $T_0=x$, $T_1=-\ln\lvert\cos x\rvert$, $E_0=x$, $E_1=\ln\lvert\sec x+\tan x\rvert$.

The corresponding cotangent and cosecant recurrences are

$$
\int\cot^n x\,dx
=-\frac{\cot^{n-1}x}{n-1}-\int\cot^{n-2}x\,dx,
\qquad n\ge2,
$$

$$
\int\csc^n x\,dx
=-\frac{\csc^{n-2}x\cot x}{n-1}
+\frac{n-2}{n-1}\int\csc^{n-2}x\,dx,
\qquad n\ge2.
$$

#### Hyperbolic powers

For integer $n\ge2$,

$$
\int\sinh^n x\,dx
=\frac{\sinh^{n-1}x\cosh x}{n}
-\frac{n-1}{n}\int\sinh^{n-2}x\,dx,
$$

$$
\int\cosh^n x\,dx
=\frac{\cosh^{n-1}x\sinh x}{n}
+\frac{n-1}{n}\int\cosh^{n-2}x\,dx.
$$

#### Polynomial times exponential

For integer $n\ge1$ and $a\ne0$,

$$
\int x^ne^{ax}\,dx
=\frac{x^ne^{ax}}a-\frac na\int x^{n-1}e^{ax}\,dx.
$$

#### Powers of logarithms

For $x>0$ and integer $n\ge1$,

$$
\int(\ln x)^n\,dx
=x(\ln x)^n-n\int(\ln x)^{n-1}\,dx.
$$

More generally, for $p\ne-1$,

$$
\int x^p(\ln x)^n\,dx
=\frac{x^{p+1}(\ln x)^n}{p+1}
-\frac n{p+1}\int x^p(\ln x)^{n-1}\,dx.
$$

#### Repeated quadratic denominators

For $a>0$ and integer $n\ge2$,

$$
J_n=\int\frac{dx}{(x^2+a^2)^n}
=\frac{x}{2a^2(n-1)(x^2+a^2)^{n-1}}
+\frac{2n-3}{2a^2(n-1)}J_{n-1}.
$$

#### Wallis integrals

Let

$$
W_n=\int_0^{\pi/2}\sin^n x\,dx
=\int_0^{\pi/2}\cos^n x\,dx.
$$

Then

$$
W_n=\frac{n-1}{n}W_{n-2},
\quad W_0=\frac\pi2,\quad W_1=1.
$$

Thus, for $m\ge0$,

$$
W_{2m}=\frac{(2m-1)!!}{(2m)!!}\frac\pi2,
\qquad
W_{2m+1}=\frac{(2m)!!}{(2m+1)!!},
$$

with $0!!=(-1)!!=1$. The double factorial multiplies integers with the same parity: $7!!=7\cdot5\cdot3\cdot1$.

### I.10 Improper integrals and convergence

Improper integrals arise from infinite intervals or unbounded integrands. They are defined by limits of proper integrals.

#### Infinite endpoints

$$
\int_a^\infty f(x)\,dx
=\lim_{R\to\infty}\int_a^R f(x)\,dx.
$$

For a two-sided infinite interval, choose a finite $c$ and require both pieces to converge:

$$
\int_{-\infty}^{\infty}f(x)\,dx
=\int_{-\infty}^c f(x)\,dx+\int_c^\infty f(x)\,dx.
$$

#### Singular endpoints and interior singularities

$$
\int_a^b f(x)\,dx
=\lim_{\varepsilon\to0^+}\int_{a+\varepsilon}^b f(x)\,dx
$$

for a singularity at $a$. If a singularity occurs at $c\in(a,b)$, split at $c$ and require both one-sided integrals to converge independently.

#### Essential $p$-tests

$$
\boxed{\int_1^\infty x^{-p}\,dx<\infty\iff p>1,}
$$

$$
\boxed{\int_0^1 x^{-p}\,dx<\infty\iff p<1.}
$$

Logarithmic refinements:

$$
\int_e^\infty\frac{dx}{x(\ln x)^p}
\text{ converges }\iff p>1,
$$

$$
\int_0^{e^{-1}}\frac{dx}{x\lvert\ln x\rvert^p}
\text{ converges }\iff p>1.
$$

When $f(x)\sim C(x-a)^{-p}$ with $C>0$ near a finite endpoint, compare with the finite-endpoint $p$-test. When $f(x)\sim Cx^{-p}$ at infinity, use the infinity test.

#### Comparison tests

For eventually nonnegative functions:

- If $0\le f\le g$ and $\int g$ converges, then $\int f$ converges.
- If $0\le g\le f$ and $\int g$ diverges, then $\int f$ diverges.
- If $f/g\to L\in(0,\infty)$ near the improper endpoint, their integrals have the same convergence behavior.

#### Absolute versus conditional convergence

If $\int\lvert f\rvert$ is finite, then $\int f$ converges absolutely. If $\int f$ converges but $\int\lvert f\rvert$ diverges, convergence is conditional.

For example,

$$
\int_1^\infty\frac{\sin x}{x}\,dx
$$

converges conditionally. Oscillation creates cancellation.

**Dirichlet test.** If $F(R)=\int_a^R f(x)\,dx$ remains bounded and $g$ is monotone with $g(x)\to0$, then $\int_a^\infty f(x)g(x)\,dx$ converges, under ordinary local integrability assumptions. A common sufficient formulation assumes $g$ is continuously differentiable.

Consequently, $\int_1^\infty \sin x/x^p\,dx$ converges for every $p>0$, and converges absolutely precisely for $p>1$.

#### Cauchy principal value is a different notion

$$
\operatorname{PV}\int_{-1}^1\frac{dx}{x}
=\lim_{\varepsilon\to0^+}
\left(\int_{-1}^{-\varepsilon}\frac{dx}{x}
+\int_{\varepsilon}^{1}\frac{dx}{x}\right)=0.
$$

The ordinary improper integral diverges because its two one-sided pieces diverge. Principal value ties the cutoffs together; ordinary convergence does not.

### I.11 Special functions and important definite integrals

Some elementary integrands have no elementary antiderivative. Standard examples include $e^{-x^2}$, $\sin x/x$, $1/\ln x$, and $\sqrt{1-k^2\sin^2x}$ for generic $0<k<1$. This is a statement about the permitted class of closed-form expressions, not about existence of the integral.

#### Gaussian integral

$$
\boxed{\int_{-\infty}^{\infty}e^{-ax^2}\,dx=\sqrt{\frac\pi a},\qquad a>0.}
$$

Completing the square yields

$$
\int_{-\infty}^{\infty}e^{-ax^2+bx+c}\,dx
=\sqrt{\frac\pi a}\exp\left(c+\frac{b^2}{4a}\right),
\qquad a>0.
$$

The error function records its antiderivative:

$$
\operatorname{erf}(x)=\frac2{\sqrt\pi}\int_0^x e^{-t^2}\,dt,
$$

$$
\int e^{-ax^2}\,dx
=\frac{\sqrt\pi}{2\sqrt a}\operatorname{erf}(\sqrt a\,x)+C.
$$

#### Gamma function

For real $s>0$,

$$
\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}\,dt.
$$

Integration by parts gives

$$
\Gamma(s+1)=s\Gamma(s),\quad
\Gamma(1)=1,\quad
\Gamma(n+1)=n!,\quad
\Gamma\left(\frac12\right)=\sqrt\pi.
$$

Rescaling gives the useful family

$$
\int_0^\infty x^{s-1}e^{-\lambda x}\,dx
=\frac{\Gamma(s)}{\lambda^s},
\qquad s>0,\ \lambda>0,
$$

and more generally,

$$
\int_0^\infty x^{m-1}e^{-\lambda x^p}\,dx
=\frac1p\lambda^{-m/p}\Gamma(m/p),
\qquad m,p,\lambda>0.
$$

#### Beta function

For real $p,q>0$,

$$
B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt
=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}.
$$

Equivalent forms:

$$
B(p,q)=\int_0^\infty\frac{t^{p-1}}{(1+t)^{p+q}}\,dt,
$$

$$
\int_0^{\pi/2}\sin^m x\cos^n x\,dx
=\frac12B\left(\frac{m+1}{2},\frac{n+1}{2}\right),
\qquad m,n>-1.
$$

#### A compact definite-integral bank

$$
\int_0^1x^{a-1}(\ln x)^n\,dx
=(-1)^n\frac{n!}{a^{n+1}},
\qquad a>0,\ n=0,1,2,\ldots,
$$

$$
\int_0^\infty\frac{dx}{1+x^2}=\frac\pi2,
$$

$$
\int_0^\infty\frac{x^{a-1}}{1+x}\,dx
=\frac\pi{\sin\pi a},
\qquad 0<a<1,
$$

$$
\int_0^\infty\frac{\sin(ax)}x\,dx
=\frac\pi2\operatorname{sgn}(a),
\qquad a\ne0,
$$

where the last is conditionally convergent.

For $a,b>0$,

$$
\int_0^\infty\frac{e^{-ax}-e^{-bx}}x\,dx=\ln\frac ba.
$$

This is a convergent cancellation within one integrand; the two separate integrals $\int_0^\infty e^{-ax}/x\,dx$ and $\int_0^\infty e^{-bx}/x\,dx$ diverge.

Other standard definitions:

$$
\operatorname{Si}(x)=\int_0^x\frac{\sin t}{t}\,dt,
\qquad
E_1(x)=\int_x^\infty\frac{e^{-t}}t\,dt\quad(x>0),
$$

$$
K(k)=\int_0^{\pi/2}\frac{d\theta}{\sqrt{1-k^2\sin^2\theta}},
\qquad 0\le k<1.
$$

At $t=0$, $\sin t/t$ is interpreted by its continuous extension, with value $1$.

### I.12 Differentiation under the integral sign

Let

$$
I(\alpha)=\int_a^b f(x,\alpha)\,dx.
$$

Under conditions that justify exchanging differentiation and integration,

$$
\boxed{I'(\alpha)=\int_a^b\frac{\partial f}{\partial\alpha}(x,\alpha)\,dx.}
$$

A convenient sufficient condition on a compact domain is continuity of $f$ and $\partial_\alpha f$. For an improper integral, a standard sufficient condition is an integrable bound

$$
\left\lvert\partial_\alpha f(x,\alpha)\right\rvert\le g(x)
$$

uniformly for $\alpha$ in a neighborhood, together with suitable existence and differentiability assumptions. Convergence at a single parameter value alone does not justify the exchange.

#### Leibniz rule with moving endpoints

For differentiable endpoints and a sufficiently regular integrand,

$$
\boxed{
\frac{d}{d\alpha}
\int_{a(\alpha)}^{b(\alpha)}f(x,\alpha)\,dx
=f(b(\alpha),\alpha)b'(\alpha)
-f(a(\alpha),\alpha)a'(\alpha)
+\int_{a(\alpha)}^{b(\alpha)}
\partial_\alpha f(x,\alpha)\,dx.
}
$$

There are **two boundary terms and one interior term**.

#### Worked example — Feynman's parameter method

Define, for $\alpha>0$,

$$
F(\alpha)=\int_0^\infty e^{-\alpha x}\frac{\sin x}{x}\,dx.
$$

Differentiate:

$$
F'(\alpha)=-\int_0^\infty e^{-\alpha x}\sin x\,dx
=-\frac1{1+\alpha^2}.
$$

Since $F(\alpha)\to0$ as $\alpha\to\infty$,

$$
F(\alpha)=\frac\pi2-\arctan\alpha
=\arctan(1/\alpha).
$$

Passing to $\alpha\to0^+$ gives the Dirichlet integral $\pi/2$, with an additional convergence argument such as Abel's theorem; simple dominated convergence by $1/x$ does not work.

### I.13 Geometric and physical applications

Translate the geometry or physical law into a differential element first. The most reliable question is: **what small amount am I summing?**

#### Area

For $f\ge g$ on $[a,b]$,

$$
A=\int_a^b[f(x)-g(x)]\,dx.
$$

If their order changes, split at intersections or use $\int_a^b\lvert f-g\rvert dx$. Horizontal slices use right boundary minus left boundary:

$$
A=\int_c^d[x_{\mathrm{right}}(y)-x_{\mathrm{left}}(y)]\,dy.
$$

For a polar region swept once, with suitable nonnegative radial bounds,

$$
A=\frac12\int_\alpha^\beta r(\theta)^2\,d\theta,
$$

or $\frac12\int_\alpha^\beta(r_{\mathrm{outer}}^2-r_{\mathrm{inner}}^2)d\theta$.

#### Volume

Cross sections:

$$
V=\int_a^b A(x)\,dx.
$$

Disks/washers about a horizontal axis:

$$
V=\pi\int_a^b[R(x)^2-r(x)^2]\,dx,
\qquad R(x)\ge r(x)\ge0.
$$

Cylindrical shells about a vertical axis:

$$
V=2\pi\int_a^b \rho(x)h(x)\,dx,
$$

where $\rho$ is distance to the axis and $h$ is shell height. Choose a slicing interval that does not count overlapping shells twice; a region crossing the axis often needs decomposition.

#### Arc length

For a continuously differentiable graph $y=f(x)$,

$$
L=\int_a^b\sqrt{1+[f'(x)]^2}\,dx.
$$

For a regular parametrized curve,

$$
L=\int_\alpha^\beta
\sqrt{[x'(t)]^2+[y'(t)]^2+[z'(t)]^2}\,dt.
$$

For a polar curve,

$$
L=\int_\alpha^\beta\sqrt{r(\theta)^2+[r'(\theta)]^2}\,d\theta.
$$

These formulas count traversal length; retracing contributes again.

#### Surface area of revolution

For a sufficiently regular generating curve,

$$
S=\int 2\pi\rho\,ds.
$$

Rotating $y=f(x)$ about the $x$-axis gives

$$
S=2\pi\int_a^b\lvert f(x)\rvert\sqrt{1+[f'(x)]^2}\,dx.
$$

Geometric area without multiplicity requires checking that the parametrization does not cover the same surface repeatedly.

#### Motion, work, mass, and centroids

$$
\text{displacement}=\int_{t_0}^{t_1}v(t)\,dt,
\qquad
\text{distance traveled}=\int_{t_0}^{t_1}\lvert v(t)\rvert\,dt,
$$

$$
W=\int_a^b F(x)\,dx
$$

for a signed force along a one-dimensional displacement.

For a rod with linear density $\lambda(x)\ge0$,

$$
M=\int_a^b\lambda(x)\,dx,\qquad
\bar x=\frac1M\int_a^b x\lambda(x)\,dx.
$$

For a uniform planar region between $y=f(x)$ and $y=g(x)$ with $f\ge g$, area $A>0$,

$$
\bar x=\frac1A\int_a^b x[f(x)-g(x)]\,dx,
$$

$$
\bar y=\frac1{2A}\int_a^b[f(x)^2-g(x)^2]\,dx.
$$

For moment of inertia about a specified axis, integrate squared perpendicular distance:

$$
I=\int \rho^2\,dm.
$$

#### Probability

For a probability density $p(x)\ge0$ with $\int_{-\infty}^\infty p(x)\,dx=1$,

$$
\Pr(a\le X\le b)=\int_a^b p(x)\,dx,\qquad
F_X(x)=\int_{-\infty}^x p(t)\,dt,
$$

$$
\mathbb E[g(X)]=\int_{-\infty}^{\infty}g(x)p(x)\,dx
$$

when the expectation is well-defined. A finite real expectation of a signed quantity requires absolute integrability.

For $X\ge0$, integration by parts or Tonelli's theorem yields the tail formula

$$
\mathbb E[X]=\int_0^\infty \Pr(X>t)\,dt,
$$

allowing either side to be $+\infty$.

### I.14 Numerical integration

Let $x_i=a+ih$, $h=(b-a)/n$, and $f_i=f(x_i)$.
For the stated midpoint/trapezoidal error bounds, assume $f\in C^2[a,b]$; for the Simpson bound, assume $f\in C^4[a,b]$.

#### Riemann sums

$$
L_n=h\sum_{i=0}^{n-1}f_i,\qquad
R_n=h\sum_{i=1}^nf_i.
$$

If $f$ is increasing, $L_n\le\int_a^bf\le R_n$; reverse the inequalities if $f$ is decreasing.

#### Composite midpoint rule

$$
M_n=h\sum_{i=1}^n
f\left(a+\left(i-\frac12\right)h\right).
$$

If $\lvert f''(x)\rvert\le K_2$ on $[a,b]$,

$$
\left\lvert\int_a^bf-M_n\right\rvert
\le\frac{K_2(b-a)^3}{24n^2}.
$$

#### Composite trapezoidal rule

$$
T_n=h\left[\frac{f_0+f_n}{2}+\sum_{i=1}^{n-1}f_i\right].
$$

Under the same second-derivative bound,

$$
\left\lvert\int_a^bf-T_n\right\rvert
\le\frac{K_2(b-a)^3}{12n^2}.
$$

It is exact for linear functions. Convex functions have $T_n\ge\int_a^bf$ and $M_n\le\int_a^bf$.

#### Composite Simpson rule

For **even** $n$,

$$
S_n=\frac h3
\left[
f_0+f_n
+4\sum_{\substack{i=1\\i\text{ odd}}}^{n-1}f_i
+2\sum_{\substack{i=2\\i\text{ even}}}^{n-2}f_i
\right].
$$

If $\lvert f^{(4)}(x)\rvert\le K_4$,

$$
\left\lvert\int_a^bf-S_n\right\rvert
\le\frac{K_4(b-a)^5}{180n^4}.
$$

It is exact for polynomials of degree at most $3$. Without the required smoothness, these error bounds do not apply.

#### Gauss–Legendre quadrature

An $n$-point Gauss–Legendre rule on $[-1,1]$ chooses special nodes $t_i$ and weights $w_i$:

$$
\int_{-1}^1f(t)\,dt\approx\sum_{i=1}^nw_if(t_i),
$$

and is exact for every polynomial of degree at most $2n-1$.

The two-point rule is

$$
\int_{-1}^1f(t)\,dt
\approx f(-1/\sqrt3)+f(1/\sqrt3).
$$

For $[a,b]$, use

$$
x=\frac{a+b}{2}+\frac{b-a}{2}t,
\qquad dx=\frac{b-a}{2}\,dt.
$$

**Practical choice:** adaptive quadrature refines intervals according to estimated error. Singularities, discontinuities, and rapid oscillations should be exposed to the numerical method through splitting, transformations, or a specialized rule.

### I.15 A method-selection checklist

| What you see | First method to try |
|---|---|
| A sum or constant multiple | Linearity; simplify algebra first |
| An inner function and its derivative | Substitution |
| A numerator proportional to a denominator's derivative | Logarithmic substitution |
| Polynomial times exponential/trig | Repeated integration by parts |
| Logarithm or inverse trig by itself | Integration by parts with $dv=dx$ |
| $e^{ax}\sin bx$ or $e^{ax}\cos bx$ | Cyclic integration by parts or the standard formula |
| A rational function | Long division, then partial fractions |
| A quadratic denominator/radical | Complete the square |
| Integer powers of trig functions | Parity rules and identities |
| Rational function of $\sin x,\cos x$ | A tailored trig substitution; half-angle substitution as fallback |
| $\sqrt{a^2-x^2}$, $\sqrt{x^2+a^2}$, $\sqrt{x^2-a^2}$ | Trigonometric or hyperbolic substitution |
| An exponent or parameter that can be lowered | Reduction formula |
| A symmetric definite interval | Check parity/reflection before integrating |
| A parameter inside an awkward definite integral | Differentiate under the integral sign |
| Infinite limits or a singularity | Establish convergence, then calculate |
| No useful elementary primitive | Special function, series, or numerical quadrature |

#### Final integration checks

1. **Differentiate the candidate antiderivative.** This is the fastest correctness test.
2. Restore $+C$ for an indefinite integral.
3. Check chain-rule factors and the sign from reversed limits.
4. Retain $\ln\lvert\cdot\rvert$ where needed.
5. Check real domains, singularities, and square-root branches.
6. Split sign changes for area or distance.
7. Split improper interior singularities and test both sides.
8. Justify every exchange of a limit, derivative, infinite sum, or integral.
9. Check units and positivity when the result represents a physical nonnegative quantity.
10. Remember: a correct antiderivative on separate intervals does not make an integral across a pole converge.

### I.16 Tensor-valued integration and continuous contraction

An integral can accumulate a scalar, a vector, a matrix, or a tensor with any finite collection of axes. The tensor shape does not change the definition: integrate its components and retain every axis that has not been contracted.

#### Index blocks and conventions

Let $A=(a_1,\ldots,a_p)$ and $B=(b_1,\ldots,b_q)$ denote finite **index blocks**. For example, $X_A(t)$ might mean $X_{ijk}(t)$ without repeatedly writing its three axes.

In these sections:

- A component label occurring twice in a product is summed over its complete block. A label occurring once is free and must match the output.
- Continuous variables such as $s,t$ are integrated only when an integral is written.
- A written summation explicitly binds its index; it does not create an additional implicit sum.
- Tensors and pairings are real unless stated otherwise. Complex adjoints require conjugation.
- Measure spaces are $\sigma$-finite, and kernels are jointly measurable, wherever Fubini and kernel-operator statements are used.
- Every exchange of an integral, derivative, or integration order requires the stated integrability or regularity conditions.

For a measurable tensor field with $\int_T\|X(t)\|\,d\mu(t)<\infty$, define

$$
\boxed{
Y_A=\int_T X_A(t)\,d\mu(t).
}
$$

Since there are finitely many components, this is equivalent to integrating every scalar component. In any fixed finite-dimensional norm,

$$
\left\|\int_T X(t)\,d\mu(t)\right\|
\le\int_T\|X(t)\|\,d\mu(t).
$$

#### What commutes with an integral?

A fixed linear map or tensor contraction commutes with integration:

$$
C_{AB}\int_T X_B(t)\,d\mu(t)
=\int_T C_{AB}X_B(t)\,d\mu(t).
$$

This includes fixed permutations of axes, traces, projections, and multiplication by a fixed matrix. It does not include arbitrary nonlinear operations:

$$
\exp\left(\int_T X(t)\,d\mu(t)\right)
\ne\int_T\exp(X(t))\,d\mu(t)
$$

in general. A coefficient $C_{AB}(t)$ depending on the integration variable must remain inside the integral.

If $C$ depends on a parameter $\theta$, it can still leave a $t$-integral, but differentiation must also act on $C$:

$$
\partial_\theta\left(C_{AB}(\theta)\int_T X_B(t,\theta)\,d\mu(t)\right)
=(\partial_\theta C_{AB})\int_T X_B\,d\mu
+C_{AB}\int_T\partial_\theta X_B\,d\mu.
$$

Here the measure is fixed and differentiation under the integral is justified.

#### Fubini is the rule for rearranging continuous contractions

If

$$
\int_S\int_T\|F(s,t)\|\,d\mu(t)\,d\nu(s)<\infty,
$$

Fubini's theorem gives

$$
\int_S\left[\int_T F_A(s,t)\,d\mu(t)\right]d\nu(s)
=\int_T\left[\int_S F_A(s,t)\,d\nu(s)\right]d\mu(t).
$$

Thus finite index sums and absolutely integrable continuous contractions may be reordered. For nonnegative scalar integrands, Tonelli permits reordering even when the value is infinite. Signed conditionally convergent integrals require separate analysis.

With a product measure and integrable factors,

$$
\int_S\int_T U_A(s)V_B(t)\,d\mu(t)\,d\nu(s)
=\left(\int_S U_A\,d\nu\right)
\left(\int_T V_B\,d\mu\right).
$$

The distinct variables are essential. An integral of a same-variable product, $\int U_A(t)V_B(t)\,d\mu(t)$, generally does not factor.

### I.17 Integral operators: kernels, derivatives, and forward tangents

An integral operator combines a tensor contraction with integration over an input coordinate:

$$
\boxed{
Y_A(s)=(\mathcal KX)_A(s)
=\int_T K_{AB}(s,t)X_B(t)\,d\mu(t).
}
$$

$A,s$ identify the output; $B,t$ are the contracted input indices and coordinate. A matrix product is the corresponding construction on a finite set with counting measure.

#### Function spaces and a sufficient boundedness condition

Take

$$
\mathcal X=L^2(T,\mu;\mathbb R^{\mathcal B}),
\qquad
\mathcal Y=L^2(S,\nu;\mathbb R^{\mathcal A}).
$$

These are square-integrable fields whose values have the indicated finite tensor shapes. If the kernel is square integrable,

$$
\|K\|_{\mathrm{HS}}^2
=\int_S\int_T K_{AB}(s,t)K_{AB}(s,t)\,d\mu(t)\,d\nu(s)
<\infty,
$$

then $\mathcal K:\mathcal X\to\mathcal Y$ is bounded and

$$
\|\mathcal KX\|_{\mathcal Y}
\le\|K\|_{\mathrm{HS}}\|X\|_{\mathcal X}.
$$

This Hilbert–Schmidt condition is sufficient, not necessary. The identity on a continuous domain, for example, is bounded but is generally represented by a distributional delta kernel rather than a square-integrable function.

#### The kernel is the functional derivative

For a perturbation $H$,

$$
\mathcal K(X+\varepsilon H)-\mathcal KX
=\varepsilon\mathcal KH.
$$

Consequently,

$$
\boxed{
D\mathcal K[X]\,H=\mathcal KH,
\qquad
\dot Y_A(s)=\int_T K_{AB}(s,t)\dot X_B(t)\,d\mu(t).
}
$$

The dot denotes a directional perturbation here, not necessarily time. This is the continuous **Jacobian–vector product**.

With the convention

$$
\delta Y_A(s)
=\int_T
\frac{\delta Y_A(s)}{\delta X_B(t)}
\delta X_B(t)\,d\mu(t),
$$

the derivative kernel is

$$
\boxed{
\frac{\delta Y_A(s)}{\delta X_B(t)}=K_{AB}(s,t).
}
$$

For $L^2$ fields, pointwise identities are interpreted almost everywhere. The bounded-operator identity is the rigorous statement; point evaluation itself is not a bounded functional on an arbitrary $L^2$ space.

If both $K$ and $X$ vary while the measures stay fixed,

$$
\dot Y_A(s)
=\int_T
\left[\dot K_{AB}(s,t)X_B(t)
+K_{AB}(s,t)\dot X_B(t)\right]d\mu(t).
$$

This is the product rule under an integral, with every input axis accounted for.

#### A variable upper limit gives a Volterra operator

For

$$
Y_A(s)=\int_a^s K_{AB}(s,t)X_B(t)\,dt,
$$

assume $X$, $K$, and $\partial_sK$ are continuous on the appropriate compact interval and triangular domain. Then the derivative with respect to the coordinate $s$ is

$$
\frac{dY_A}{ds}
=K_{AB}(s,s)X_B(s)
+\int_a^s \partial_sK_{AB}(s,t)X_B(t)\,dt.
$$

This coordinate derivative is distinct from the derivative with respect to the input field $X$. It is precisely the earlier Leibniz rule with tensor-valued integrands.

### I.18 Adjoint integral operators and reverse cotangents

The forward and reverse constructions here are **differentiation through an integral-valued map**. There is no separate universal pair of “forward integration” and “reverse integration” methods corresponding to forward- and reverse-mode differentiation. An antiderivative, an inverse operator, and an adjoint are different objects.

#### Declare the pairings before taking an adjoint

Use the real $L^2$ pairings

$$
\langle U,V\rangle_{\mathcal X}
=\int_T U_B(t)V_B(t)\,d\mu(t),
$$

$$
\langle G,H\rangle_{\mathcal Y}
=\int_S G_A(s)H_A(s)\,d\nu(s).
$$

The adjoint is defined by

$$
\langle G,\mathcal KH\rangle_{\mathcal Y}
=\langle\mathcal K^\ast G,H\rangle_{\mathcal X}.
$$

Expand the left side and exchange integration order:

$$
\begin{aligned}
\langle G,\mathcal KH\rangle_{\mathcal Y}
&=\int_S\int_T
G_A(s)K_{AB}(s,t)H_B(t)\,d\mu(t)\,d\nu(s)\\
&=\int_T
\left[\int_S K_{AB}(s,t)G_A(s)\,d\nu(s)\right]
H_B(t)\,d\mu(t).
\end{aligned}
$$

Therefore,

$$
\boxed{
(\mathcal K^\ast G)_B(t)
=\int_S K_{AB}(s,t)G_A(s)\,d\nu(s).
}
$$

The output and input roles exchange: the adjoint integrates over **$S$ with $\nu$**, and returns a field on **$T$ with $\mu$**. For complex fields under the usual Hermitian pairings, replace $K_{AB}$ in this formula by $\overline{K_{AB}}$.

#### Pulling back a scalar loss

If

$$
\delta L=\langle\bar Y,\delta Y\rangle_{\mathcal Y},
$$

then

$$
\boxed{
\bar X_B(t)
=(\mathcal K^\ast\bar Y)_B(t)
=\int_S K_{AB}(s,t)\bar Y_A(s)\,d\nu(s).
}
$$

For a family of output objectives indexed by $C$, the same contraction acts independently on that retained index:

$$
\bar X_{CB}(t)
=\int_S K_{AB}(s,t)\bar Y_{CA}(s)\,d\nu(s).
$$

For fixed measures and parameterized $K_\theta,X_\theta$, the scalar parameter derivative is

$$
\begin{aligned}
\frac{dL}{d\theta_\alpha}
={}&\left.\partial_{\theta_\alpha}L\right|_Y
+\int_T\bar X_B(t)\,\partial_{\theta_\alpha}X_B(t)\,d\mu(t)\\
&+\int_S\int_T
\bar Y_A(s)\,
\partial_{\theta_\alpha}K_{AB}(s,t)\,
X_B(t)\,d\mu(t)\,d\nu(s).
\end{aligned}
$$

The index $\alpha$ is free in this equation. Measure or domain dependence adds the terms in §I.19.

For the simpler reduction $Y_A=\int_T X_A\,d\mu$, a finite measure $\mu(T)<\infty$ makes the map bounded from $L^2$ to the finite output tensor space. Its adjoint broadcasts the output cotangent:

$$
\bar X_A(t)=\bar Y_A.
$$

Indeed, $\bar Y_A\int_T H_A\,d\mu=\int_T\bar Y_AH_A\,d\mu$. The constant field lies in $L^2$ because the measure is finite. On an infinite-measure domain, integration is not generally a bounded functional on all of $L^2$; the admissible space must be changed or a square-integrable weighting introduced.

#### Worked example: the adjoint of accumulation

On $[a,b]$ with Lebesgue measure, let

$$
Y_A(s)=\int_a^s X_A(t)\,dt.
$$

Its pullback is a tail integral:

$$
\boxed{
\bar X_A(t)=\int_t^b\bar Y_A(s)\,ds.
}
$$

Equivalently, $\bar X_A'(t)=-\bar Y_A(t)$ with terminal condition $\bar X_A(b)=0$. This backward accumulation is the adjoint of this particular operator; it is not its inverse.

Changing the inner product changes the represented gradient. With positive-definite matrix weights $W_X(t),W_Y(s)$, the weighted adjoint is

$$
\mathcal K^\dagger
=W_X^{-1}\mathcal K^\ast W_Y,
$$

provided the weights and their inverses define the required bounded mappings. The underlying derivative and dual pullback remain the same; their representation by gradient fields depends on the pairing.

### I.19 Nonlinear integrands, changing measures, and moving boundaries

#### Nonlinear tensor integral maps

Consider

$$
(\mathcal N[X])_A(s)
=\int_T\Phi_A(s,t,X(t),\theta)\,d\mu(t).
$$

Define the local tensor derivative

$$
J_{AB}(s,t;X)
=\left.
\frac{\partial\Phi_A(s,t,x,\theta)}{\partial x_B}
\right|_{x=X(t)}.
$$

Assume the chosen function spaces and domination conditions make $\mathcal N$ differentiable with the displayed bounded derivative. Smooth bounded fields on compact domains with finite measures, and suitable uniform bounds on the integrand derivatives, provide a standard setting. Pointwise differentiability alone does not establish Fréchet differentiability on an arbitrary function space.

Then

$$
\boxed{
(D\mathcal N[X]H)_A(s)
=\int_T J_{AB}(s,t;X)H_B(t)\,d\mu(t),
}
$$

$$
\boxed{
\bigl(D\mathcal N[X]^\ast G\bigr)_B(t)
=\int_S J_{AB}(s,t;X)G_A(s)\,d\nu(s).
}
$$

The nonlinear map is linearized first; its derivative kernel is then transposed through the pairing. If a second derivative exists,

$$
(D^2\mathcal N[X](H,V))_A(s)
=\int_T
\frac{\partial^2\Phi_A}{\partial x_B\partial x_C}
(s,t,X(t),\theta)\,
H_B(t)V_C(t)\,d\mu(t).
$$

For example, with a bounded kernel on finite-measure domains, integrating a quadratic tensor feature gives

$$
(\mathcal N[X])_A(s)
=\frac12\int_T k_A(s,t)X_B(t)X_B(t)\,d\mu(t).
$$

Here $B$ contracts the input tensor's squared norm, while $A$ remains an output block. Direct expansion gives

$$
(D\mathcal N[X]H)_A(s)
=\int_T k_A(s,t)X_B(t)H_B(t)\,d\mu(t),
$$

$$
\bigl(D\mathcal N[X]^\ast G\bigr)_B(t)
=X_B(t)\int_S k_A(s,t)G_A(s)\,d\nu(s).
$$

The integral is linear in the quadratic feature but nonlinear in $X$. Its second derivative is

$$
(D^2\mathcal N[X](H,V))_A(s)
=\int_T k_A(s,t)H_B(t)V_B(t)\,d\mu(t).
$$

These formulas follow from the expansion of $X_BX_B$, without treating integration itself as a nonlinear operation.

#### A parameter-dependent density

On a fixed domain with $d\mu_\theta(t)=p_\theta(t)\,dt$,

$$
I_A(\theta)=\int_T f_A(t,\theta)p_\theta(t)\,dt
$$

has derivative

$$
\partial_{\theta_\alpha}I_A
=\int_T
\left[
(\partial_{\theta_\alpha}f_A)p_\theta
+f_A\partial_{\theta_\alpha}p_\theta
\right]dt.
$$

For a positive probability density on a fixed support, this becomes

$$
\boxed{
\partial_{\theta_\alpha}\mathbb E_{p_\theta}[f_A]
=\mathbb E_{p_\theta}
\left[
\partial_{\theta_\alpha}f_A
+f_A\,\partial_{\theta_\alpha}\ln p_\theta
\right].
}
$$

The second term accounts for changing probability weights. Under the same interchange assumptions,

$$
\mathbb E_{p_\theta}
[\partial_{\theta_\alpha}\ln p_\theta]=0.
$$

These score identities require care when the support changes with $\theta$.

#### Moving domains retain a boundary contribution

For a smoothly moving domain $\Omega_\theta\subset\mathbb R^d$, let $v_{\alpha k}$ be its boundary velocity when $\theta_\alpha$ changes, and let $n_k$ be the outward unit normal. The transport rule is

$$
\boxed{
\partial_{\theta_\alpha}
\int_{\Omega_\theta}f_A(x,\theta)\,dx
=\int_{\Omega_\theta}\partial_{\theta_\alpha}f_A\,dx
+\int_{\partial\Omega_\theta}
f_A\,v_{\alpha k}n_k\,dS.
}
$$

The coordinate index $k$ is summed. The interior derivative holds the spatial coordinate fixed. For a weighted integral, apply this identity to $f_Ap_\theta$.

This is the multidimensional version of the earlier endpoint terms. For example, $X\sim\operatorname{Uniform}(0,\theta)$, $\theta>0$, gives

$$
\frac{d}{d\theta}\mathbb E[X]
=\frac{d}{d\theta}\int_0^\theta\frac{x}{\theta}\,dx
=1-\frac12=\frac12.
$$

Differentiating only the interior density produces $-1/2$ and misses the boundary's $+1$.

Alternatively, map a fixed reference domain into $\Omega_\theta$ and differentiate the transformed integrand together with its Jacobian determinant. This connects moving-domain differentiation directly to change of variables.

### I.20 First variations, second variations, and functional Hessians

For a Fréchet-differentiable scalar functional $\mathcal J[X]$, its first variation in direction $H$ is

$$
D\mathcal J[X]H
=\left.\frac{d}{d\varepsilon}\mathcal J[X+\varepsilon H]
\right|_{\varepsilon=0}.
$$

The derivative must be a bounded linear functional of $H$ under the chosen norm; existence of every directional limit alone does not establish this. On the chosen $L^2$ Hilbert space, its Riesz representation is

$$
D\mathcal J[X]H
=\int_T(\nabla\mathcal J[X])_A(t)H_A(t)\,d\mu(t).
$$

For a twice Fréchet-differentiable functional, the second variation is the bilinear form

$$
D^2\mathcal J[X](H,V)
=\left.
\frac{\partial^2}{\partial\varepsilon\,\partial\eta}
\mathcal J[X+\varepsilon H+\eta V]
\right|_{\varepsilon=\eta=0}.
$$

For a twice continuously Fréchet-differentiable functional, this form is symmetric. A Hessian operator $\mathcal H_X$ represents it as $\langle H,\mathcal H_XV\rangle$.

#### Local integral functionals

For

$$
\mathcal J[X]=\int_T\ell(t,X(t))\,d\mu(t),
$$

under the required differentiation and boundedness assumptions,

$$
(\nabla\mathcal J[X])_A(t)
=\frac{\partial\ell}{\partial x_A}(t,X(t)),
$$

$$
\boxed{
(\mathcal H_XV)_A(t)
=\frac{\partial^2\ell}{\partial x_A\partial x_B}
(t,X(t))V_B(t).
}
$$

The Hessian acts pointwise. A functional with interactions between different coordinates instead produces a nonlocal Hessian.

#### Quadratic interaction kernels: symmetry must exchange both blocks

On one common domain and tensor space, let

$$
\mathcal Q[X]
=\frac12\int_T\int_T
X_A(s)M_{AB}(s,t)X_B(t)\,d\mu(t)\,d\mu(s)
-\int_T b_A(t)X_A(t)\,d\mu(t).
$$

Assume $M$ defines a bounded operator and its double-integral and adjoint exchanges are justified; a square-integrable kernel is sufficient. Take $b\in L^2$ and define

$$
S_{AB}(s,t)
=\frac12\left[M_{AB}(s,t)+M_{BA}(t,s)\right].
$$

Expanding $\mathcal Q[X+\varepsilon H]$ gives

$$
\boxed{
\nabla\mathcal Q[X]=\mathcal SX-b,
\qquad
\mathcal H_XV=\mathcal SV.
}
$$

Only the self-adjoint part contributes to a real quadratic form. Kernel symmetry means

$$
S_{AB}(s,t)=S_{BA}(t,s),
$$

not merely $S_{AB}(s,t)=S_{BA}(s,t)$. Symmetry alone does not establish positive semidefiniteness or convexity.

#### Worked quadratic objective: an integral observation model

Let $R=\mathcal KX-d$ and

$$
\mathcal J[X]
=\frac12\|R\|_{\mathcal Y}^2
+\frac{\lambda}{2}\|X\|_{\mathcal X}^2,
\qquad\lambda\ge0.
$$

Its gradient and Hessian-vector product are

$$
\boxed{
\nabla\mathcal J[X]=\mathcal K^\ast(\mathcal KX-d)+\lambda X,
}
$$

$$
\boxed{
\mathcal H_XV=\mathcal K^\ast\mathcal KV+\lambda V.
}
$$

The data-term Hessian kernel is

$$
H_{BC}(t,u)
=\int_S K_{AB}(s,t)K_{AC}(s,u)\,d\nu(s).
$$

It satisfies $H_{BC}(t,u)=H_{CB}(u,t)$, and

$$
\langle V,\mathcal H_XV\rangle_{\mathcal X}
=\|\mathcal KV\|_{\mathcal Y}^2
+\lambda\|V\|_{\mathcal X}^2\ge0.
$$

The $\lambda V$ term is the identity part of the operator; it need not be forced into an ordinary integral kernel.

#### Nonlinear least squares: what Gauss–Newton omits

For $\mathcal J[X]=\frac12\|\mathcal N[X]-d\|_{\mathcal Y}^2$, set $R=\mathcal N[X]-d$ and $\mathcal A_X=D\mathcal N[X]$. Then

$$
\nabla\mathcal J[X]=\mathcal A_X^\ast R,
$$

$$
\boxed{
D^2\mathcal J[X](H,V)
=\langle\mathcal A_XH,\mathcal A_XV\rangle_{\mathcal Y}
+\langle R,D^2\mathcal N[X](H,V)\rangle_{\mathcal Y}.
}
$$

The corresponding Hessian-vector product is

$$
\mathcal H_XV
=\mathcal A_X^\ast\mathcal A_XV
+\bigl(D(\mathcal A_X^\ast)[V]\bigr)R.
$$

Gauss–Newton retains the first term. It is positive semidefinite and is exact at zero residual or when $\mathcal N$ is affine. In general, the residual-weighted second derivative is part of the exact Hessian.

### I.21 Quadrature as a tensor contraction

Quadrature replaces a continuous integration coordinate by a weighted finite axis. Assume the fields have well-defined values at the quadrature nodes; arbitrary $L^2$ equivalence classes do not supply point samples.

For nodes $t_q$ and weights $w_q$,

$$
Y_A=\int_T X_A(t)\,d\mu(t)
\approx Y_A^{(Q)}
=\sum_{q=1}^Q w_qX_A(t_q).
$$

Writing $X_{qA}=X_A(t_q)$ exposes a weighted reduction:

$$
\dot Y_A^{(Q)}
=\sum_q w_q\dot X_{qA}.
$$

With ordinary Euclidean pairings on the finite arrays,

$$
\boxed{
\bar X_{qA}=w_q\bar Y_A,
\qquad
\frac{\partial L}{\partial w_q}=\bar Y_AX_{qA}.
}
$$

In the second identity, $A$ is contracted while $q$ is retained.

#### Nodes and weights can also depend on parameters

If the rule has smoothly varying nodes and weights,

$$
\begin{aligned}
\partial_{\theta_\alpha}Y_A^{(Q)}
=\sum_q\Big[
&(\partial_{\theta_\alpha}w_q)X_A(t_q,\theta)\\
&+w_q\,\partial_{\theta_\alpha}X_A(t_q,\theta)\\
&+w_q\,\partial_{t_k}X_A(t_q,\theta)\,
\partial_{\theta_\alpha}(t_q)_k
\Big].
\end{aligned}
$$

The middle derivative holds the node coordinate fixed; the last term accounts for node motion. Only $k$ is implicitly summed, while $q$ is explicitly summed and $A,\alpha$ are free.

This differentiates the quadrature approximation. Identifying its result with the exact derivative of the original integral requires an additional convergence argument. A rule that changes its node count or subdivision pattern discontinuously is not covered by the smooth fixed-rule formula.

#### Euclidean and quadrature-weighted adjoints are different representations

Discretize the integral operator as

$$
Y_{rA}=\sum_q w_qK_{rA,qB}X_{qB}.
$$

After flattening each retained tensor block only for notation, write

$$
\mathbf Y=\mathbf A\mathbf X,
\qquad
\mathbf A=\mathbf K\mathbf W,
$$

where $\mathbf W=\operatorname{diag}(w_qI)$ and output weights give $\mathbf V=\operatorname{diag}(v_rI)$.

Under Euclidean pairings,

$$
\boxed{
\bar{\mathbf X}_E
=\mathbf A^\top\bar{\mathbf Y}_E
=\mathbf W\mathbf K^\top\bar{\mathbf Y}_E.
}
$$

If all weights are positive, they also define the inner products

$$
\langle U,X\rangle_W=U^\top\mathbf WX,
\qquad
\langle G,Y\rangle_V=G^\top\mathbf VY.
$$

The adjoint under these pairings is

$$
\boxed{
\mathbf A^\dagger
=\mathbf W^{-1}\mathbf A^\top\mathbf V
=\mathbf K^\top\mathbf V.
}
$$

Thus $\bar{\mathbf X}_W=\mathbf A^\dagger\bar{\mathbf Y}_V$, with

$$
\bar{\mathbf X}_E=\mathbf W\bar{\mathbf X}_W,
\qquad
\bar{\mathbf Y}_E=\mathbf V\bar{\mathbf Y}_V.
$$

The input weight disappears from the represented weighted adjoint because the input pairing already contains it. It has not disappeared from the derivative.

For example, if $L=\frac12\mathbf Y^\top\mathbf V\mathbf Y$, its gradients with respect to $\mathbf X$ are

$$
\nabla_E L
=\mathbf W\mathbf K^\top\mathbf V\mathbf Y,
\qquad
\nabla_W L
=\mathbf K^\top\mathbf V\mathbf Y.
$$

Quadrature rules with zero or negative weights do not define these positive-definite inner products; their Euclidean pullbacks still exist.

#### Tensor-product rules and separability

On a product domain with product measure,

$$
\int X_A(t_1,\ldots,t_d)\,\prod_{k=1}^d d\mu_k(t_k)
\approx
\sum_{q_1,\ldots,q_d}
\left(\prod_{k=1}^d w_{q_k}^{(k)}\right)
X_A(t_{q_1}^{(1)},\ldots,t_{q_d}^{(d)}).
$$

Using $n$ nodes per coordinate gives $n^d$ combinations. Writing the expression as a tensor contraction does not remove this cost.

If a field has an exact separable representation

$$
X_A(t_1,\ldots,t_d)
=\sum_{\rho=1}^R C_{A\rho}
\prod_{k=1}^d x_\rho^{(k)}(t_k),
$$

and every factor $x_\rho^{(k)}$ belongs to $L^1(\mu_k)$, then termwise absolute integrability and Fubini give

$$
\boxed{
\int X_A\,d\mu
=\sum_{\rho=1}^R C_{A\rho}
\prod_{k=1}^d\int x_\rho^{(k)}(t_k)\,d\mu_k(t_k).
}
$$

This reduces integration to one-dimensional factors. The benefit depends on obtaining a sufficiently small rank $R$; arbitrary high-dimensional integrands need not have such a representation.

### I.22 Integration by parts as an adjoint rule

The elementary formula $\int u\,dv=uv-\int v\,du$ transfers a derivative from one factor to another. In operator notation, that transfer constructs a differential operator's adjoint.

#### The derivative's adjoint includes boundary conditions

For sufficiently regular tensor fields on $[a,b]$,

$$
\int_a^b U_A(t)V_A'(t)\,dt
=[U_AV_A]_a^b-\int_a^b U_A'(t)V_A(t)\,dt.
$$

The **formal adjoint** of $D=d/dt$ is $D^\dagger=-D$. An actual Hilbert-space adjoint also specifies domains and boundary conditions. The boundary term must vanish for every admissible pair, as under suitable zero-endpoint or periodic conditions.

For a differential operator with spatially varying coefficients,

$$
(\mathcal LX)_A
=\sum_{|\beta|\le m}a_{AB,\beta}(x)\,\partial^\beta X_B,
$$

its real formal adjoint is

$$
\boxed{
(\mathcal L^\dagger U)_B
=\sum_{|\beta|\le m}
(-1)^{|\beta|}
\partial^\beta\!\left(a_{AB,\beta}(x)U_A(x)\right).
}
$$

Here $\beta$ is an explicitly summed derivative multi-index. Derivatives act on the coefficients as well as on $U$. Green's identities are the multidimensional versions of this calculation, with boundary flux replacing the endpoint term.

#### Weighted adjoints and Stein's identity

For $p(t)>0$,

$$
\int_a^b p\,u\,v'\,dt
=[puv]_a^b
-\int_a^b p\left[u'+(\ln p)'u\right]v\,dt.
$$

Thus, when the boundary pairing vanishes,

$$
\boxed{D^\dagger_p=-D-(\ln p)'.}
$$

With a probability density and admissible test function $\varphi$, setting $u=1$ yields

$$
\boxed{
\mathbb E_p\left[\varphi'(t)+\varphi(t)(\ln p(t))'\right]=0.
}
$$

This is a Stein identity. On an unbounded domain, the required boundary decay and integrability are substantive conditions. The spatial score $(\ln p)'$ here is distinct from the parameter score $\partial_\theta\ln p_\theta$ in §I.19.

#### Variational derivatives with spatial derivatives

For

$$
\mathcal J[X]=\int_\Omega
\ell(x,X_A,\partial_kX_A)\,dx,
$$

integration by parts gives

$$
\begin{aligned}
D\mathcal J[X]H
={}&\int_\Omega
\left[
\frac{\partial\ell}{\partial X_A}
-\partial_k
\left(\frac{\partial\ell}{\partial(\partial_kX_A)}\right)
\right]H_A\,dx\\
&+\int_{\partial\Omega}
n_k\frac{\partial\ell}{\partial(\partial_kX_A)}
H_A\,dS.
\end{aligned}
$$

With fixed boundary values, admissible variations satisfy $H=0$ there. The interior coefficient is the Euler–Lagrange expression. Free boundary values instead produce natural boundary conditions. On a Sobolev space, the derivative initially belongs to its dual; identifying it with an $L^2$ gradient requires sufficient regularity.

#### Continuous adjoints for an accumulated ODE objective

Let a tensor state satisfy

$$
\dot x_A=f_A(x,\theta,t),
\qquad x_A(0)=x_{0,A}(\theta),
$$

and take a fixed terminal time $T$:

$$
J(\theta)=\Phi(x(T),\theta)
+\int_0^T\ell(x(t),\theta,t)\,dt.
$$

Assume a well-posed differentiable solution map and sufficiently smooth data. Write $f_{A,B}=\partial f_A/\partial x_B$. Integration by parts transfers the state-variation derivative onto an adjoint field:

$$
\boxed{
-\dot\lambda_B
=f_{A,B}\lambda_A+\ell_{,B},
\qquad
\lambda_B(T)=\Phi_{,B}.
}
$$

All coefficients are evaluated along the forward trajectory. The parameter gradient is

$$
\boxed{
\frac{dJ}{d\theta_\alpha}
=\Phi_{,\alpha}
+\lambda_A(0)\,\partial_{\theta_\alpha}x_{0,A}
+\int_0^T
\left[\ell_{,\alpha}+\lambda_Af_{A,\alpha}\right]dt.
}
$$

Commas with $\alpha$ denote explicit parameter derivatives with the state held fixed. The initial-condition term is necessary whenever the initial state depends on the parameter. A varying terminal time requires its own boundary contribution.

This is the adjoint of the continuous model. Differentiating a discretized time-stepping map gives a discrete adjoint; the two procedures need not produce identical finite-resolution gradients.

#### Connections and primary references

The seven sections above reuse the same core operations: linearity, Fubini, Leibniz differentiation, change of variables, integration by parts, and the chain rule. Tensor notation records retained and contracted axes; the measure and pairing determine continuous accumulation and its adjoint.

- [Bright, Edelman, and Johnson, Matrix Calculus (for Machine Learning and Beyond)](https://arxiv.org/abs/2501.14787): derivatives as linear maps, ODE sensitivities, and functionals; see the linked [MIT lecture notes and readings](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/pages/lecture-notes-and-readings/).
- [Steven G. Johnson, Notes on Adjoint Methods](https://math.mit.edu/~stevenj/18.336/adjoint.pdf): adjoint sensitivity calculations and the role of forward and adjoint solves.
- [Harrell and Herod, Geometry and Integral Operators](https://harrell.math.gatech.edu/pde/ch13wr.html): integral kernels, pairings, and adjoint operators.
- [Gilbert Strang, Calculus of Variations](https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/e94c05947ed036cd6ad0150102087062_am72.pdf): weak and strong variational equations connected by integration by parts.

## Differential calculus

- [D.1 Definition, meaning, and notation](#d1-definition-meaning-and-notation)
- [D.2 Algebraic differentiation rules](#d2-algebraic-differentiation-rules)
- [D.3 Standard derivative table](#d3-standard-derivative-table)
- [D.4 Chain-rule patterns to recognize immediately](#d4-chain-rule-patterns-to-recognize-immediately)
- [D.5 Inverse-function differentiation](#d5-inverse-function-differentiation)
- [D.6 Implicit differentiation](#d6-implicit-differentiation)
- [D.7 Logarithmic differentiation and variable exponents](#d7-logarithmic-differentiation-and-variable-exponents)
- [D.8 Higher derivatives and Leibniz’s rule](#d8-higher-derivatives-and-leibnizs-rule)
- [D.9 Parametric and polar curves](#d9-parametric-and-polar-curves)
- [D.10 Tangents, normals, and local differentials](#d10-tangents-normals-and-local-differentials)
- [D.11 Related rates](#d11-related-rates)
- [D.12 Mean value theorems](#d12-mean-value-theorems)
- [D.13 L’Hôpital’s rule and indeterminate limits](#d13-lhôpitals-rule-and-indeterminate-limits)
- [D.14 Monotonicity, extrema, and concavity](#d14-monotonicity-extrema-and-concavity)
- [D.15 Taylor’s theorem and error bounds](#d15-taylors-theorem-and-error-bounds)
- [D.16 Core Maclaurin expansions](#d16-core-maclaurin-expansions)
- [D.17 Asymptotic notation and small-angle equivalents](#d17-asymptotic-notation-and-small-angle-equivalents)
- [D.18 Optimization workflow and Newton’s method](#d18-optimization-workflow-and-newtons-method)
- [D.19 Numerical differentiation](#d19-numerical-differentiation)
- [D.20 Technique-selection table](#d20-technique-selection-table)
- [D.21 High-frequency mistakes to avoid](#d21-high-frequency-mistakes-to-avoid)
- [D.22 Tensor derivatives and Einstein index notation](#d22-tensor-derivatives-and-einstein-index-notation)
- [D.23 Derivative tensors, gradients, and the tensor chain rule](#d23-derivative-tensors-gradients-and-the-tensor-chain-rule)
- [D.24 Forward mode, reverse mode, and computational graphs](#d24-forward-mode-reverse-mode-and-computational-graphs)
- [D.25 Local tensor derivative rules](#d25-local-tensor-derivative-rules)
- [D.26 Worked example: indexed least squares, forward and backward](#d26-worked-example-indexed-least-squares-forward-and-backward)
- [D.27 Higher derivatives and mixed-mode automatic differentiation](#d27-higher-derivatives-and-mixed-mode-automatic-differentiation)
- [D.28 Softmax and attention as tensor differentiation examples](#d28-softmax-and-attention-as-tensor-differentiation-examples)
- [D.29 Choosing a differentiation mode and checking the result](#d29-choosing-a-differentiation-mode-and-checking-the-result)

### D.1 Definition, meaning, and notation

The derivative at $a$ is

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
=\lim_{x\to a}\frac{f(x)-f(a)}{x-a},
$$

provided the limit is finite. Equivalent notation includes

$$
f'(x),\qquad Df(x),\qquad D_xf(x),\qquad \frac{df}{dx}.
$$

For a time variable, $\dot x=dx/dt$ and $\ddot x=d^2x/dt^2$.

The most useful interpretation is **local linear approximation**:

$$
f(a+h)=f(a)+f'(a)h+o(h).
$$

The remainder $o(h)$ satisfies $o(h)/h\to0$. Thus the derivative is the coefficient of the best first-order local approximation, as well as the tangent slope and instantaneous rate of change.

#### One-sided derivatives

$$
f'_+(a)=\lim_{h\downarrow0}\frac{f(a+h)-f(a)}h,\qquad
f'_-(a)=\lim_{h\uparrow0}\frac{f(a+h)-f(a)}h.
$$

At an interior point, $f'(a)$ exists exactly when these are finite and equal. At a domain endpoint, a one-sided derivative is often the appropriate object.

#### Differentiability and continuity

$$
\text{Differentiable at }a\quad\Longrightarrow\quad
\text{continuous at }a.
$$

The converse fails: $f(x)=|x|$ is continuous at $0$ but has left derivative $-1$ and right derivative $1$. A corner, cusp, vertical tangent, or discontinuity can prevent a finite derivative. An infinite slope is not a finite derivative under the usual definition.

A differentiable function need not have a continuous derivative. The notation $f\in C^k$ means that derivatives through order $k$ exist and are continuous; $C^\infty$ means this holds for every finite order. Smoothness alone does not imply equality with a Taylor series.

#### Piecewise functions and junctions

At a joining point $a$, first compare the one-sided function limits with the assigned value $f(a)$. If continuity fails, ordinary differentiability already fails. If continuity holds, compute the one-sided difference quotients using the **actual value at the junction**. Matching formulas for derivatives away from the junction is not a substitute for this check.

For example, defining $f(x)=x^2$ for $x<0$ and $f(x)=2x^2$ for $x\ge0$ gives $f'(0)=0$, although the second one-sided derivatives at zero differ. The resulting function is continuously differentiable but not twice differentiable at zero. Conversely, replacing the second branch by $2x+1$ makes the function discontinuous at zero, regardless of the derivatives away from zero.

### D.2 Algebraic differentiation rules

Let $c$ be constant and let $u,v$ be differentiable functions of $x$.

| Rule | Formula | Condition |
|---|---|---|
| Constant | $D(c)=0$ | — |
| Identity | $D(x)=1$ | — |
| Linearity | $D(au+bv)=au'+bv'$ | $a,b$ constant |
| Product | $D(uv)=u'v+uv'$ | Both differentiable |
| Reciprocal | $D(1/u)=-u'/u^2$ | $u\ne0$ |
| Quotient | $D(u/v)=(u'v-uv')/v^2$ | $v\ne0$ |
| Chain | $D[f(g(x))]=f'(g(x))g'(x)$ | Appropriate differentiability |
| Power of a function | $D(u^r)=r u^{r-1}u'$ | Real power defined and differentiable |
| Product of many factors | $D(\prod_{j=1}^m u_j)=\sum_{k=1}^m u'_k\prod_{j\ne k}u_j$ | No division by a factor required |

The last formula remains valid even where one of the factors vanishes. Its logarithmic version, $(\prod u_j)'/(\prod u_j)=\sum u'_j/u_j$, requires nonzero factors.

#### Higher derivatives of a composition

If $y=f(g(x))$, then

$$
y''=f''(g)(g')^2+f'(g)g'',
$$

$$
y'''=f'''(g)(g')^3+3f''(g)g'g''+f'(g)g'''.
$$

**Do not square the chain rule:** the $f'(g)g''$ term in the second derivative is essential.

For completeness, the general chain rule is **Faà di Bruno's formula**:

$$
\frac{d^n}{dx^n}f(g(x))
=
\sum_{\substack{m_1,\ldots,m_n\ge0\\
m_1+2m_2+\cdots+nm_n=n}}
\frac{n!}{m_1!\cdots m_n!}
f^{(m_1+\cdots+m_n)}(g(x))
\prod_{j=1}^{n}
\left(\frac{g^{(j)}(x)}{j!}\right)^{m_j}.
$$

This is useful for symbolic higher derivatives; for ordinary revision problems, the first three chain formulas are usually sufficient.

### D.3 Standard derivative table

#### Powers, exponentials, and logarithms

| Function $f(x)$ | Derivative $f'(x)$ | Domain notes |
|---|---|---|
| $x^r$ | $r x^{r-1}$ | For arbitrary real $r$, use $x>0$; integer/rational powers can have larger domains |
| $\sqrt{x}$ | $1/(2\sqrt{x})$ | $x>0$ |
| $1/x$ | $-1/x^2$ | $x\ne0$ |
| $e^x$ | $e^x$ | All real $x$ |
| $a^x$ | $a^x\ln a$ | $a>0$ |
| $\ln x$ | $1/x$ | $x>0$ |
| $\ln\lvert x\rvert$ | $1/x$ | $x\ne0$ |
| $\log_a x$ | $1/(x\ln a)$ | $a>0,\ a\ne1,\ x>0$ |
| $\lvert x\rvert$ | $\operatorname{sgn}(x)$ | $x\ne0$; no derivative at $0$ |

For a differentiable nonzero $u$,

$$
\frac{d}{dx}\ln|u(x)|=\frac{u'(x)}{u(x)}.
$$

The power rule needs attention at zero. For example, $x^{1/3}$ is real on all of $\mathbb R$, but its usual derivative formula is finite only away from $0$; $x^3$ is differentiable everywhere.

#### Trigonometric functions

| Function | Derivative | Excluded points |
|---|---|---|
| $\sin x$ | $\cos x$ | None |
| $\cos x$ | $-\sin x$ | None |
| $\tan x$ | $\sec^2x$ | $\cos x=0$ |
| $\cot x$ | $-\csc^2x$ | $\sin x=0$ |
| $\sec x$ | $\sec x\tan x$ | $\cos x=0$ |
| $\csc x$ | $-\csc x\cot x$ | $\sin x=0$ |

If an angle is expressed in degrees, an additional $\pi/180$ factor appears when differentiating with respect to its numerical degree value.

#### Inverse trigonometric functions

Use the usual principal branches, with

$$
\operatorname{arcsec}x\in[0,\pi]\setminus\{\pi/2\},\qquad
\operatorname{arccsc}x\in[-\pi/2,\pi/2]\setminus\{0\},
$$

and $\operatorname{arccot}x\in(0,\pi)$.

| Function | Derivative | Where the derivative is finite |
|---|---|---|
| $\arcsin x$ | $1/\sqrt{1-x^2}$ | $\lvert x\rvert<1$ |
| $\arccos x$ | $-1/\sqrt{1-x^2}$ | $\lvert x\rvert<1$ |
| $\arctan x$ | $1/(1+x^2)$ | All real $x$ |
| $\operatorname{arccot}x$ | $-1/(1+x^2)$ | All real $x$ |
| $\operatorname{arcsec}x$ | $1/(\lvert x\rvert\sqrt{x^2-1})$ | $\lvert x\rvert>1$ |
| $\operatorname{arccsc}x$ | $-1/(\lvert x\rvert\sqrt{x^2-1})$ | $\lvert x\rvert>1$ |

The absolute value in the arcsecant and arccosecant derivatives matters. Some references choose different inverse-function branches; state a convention when comparing formulas.

Also, $\sin^{-1}x$ conventionally denotes $\arcsin x$, whereas $(\sin x)^{-1}=\csc x$. Write $\arcsin$ when ambiguity is possible.

#### Hyperbolic functions

$$
\sinh x=\frac{e^x-e^{-x}}2,\qquad
\cosh x=\frac{e^x+e^{-x}}2,\qquad
\cosh^2x-\sinh^2x=1.
$$

| Function | Derivative |
|---|---|
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |
| $\tanh x$ | $\operatorname{sech}^2x$ |
| $\coth x$ | $-\operatorname{csch}^2x$ |
| $\operatorname{sech}x$ | $-\operatorname{sech}x\tanh x$ |
| $\operatorname{csch}x$ | $-\operatorname{csch}x\coth x$ |

$\coth$ and $\operatorname{csch}$ are undefined at zero.

#### Inverse hyperbolic functions

| Function | Derivative | Real domain for the displayed derivative |
|---|---|---|
| $\operatorname{arsinh}x$ | $1/\sqrt{1+x^2}$ | All real $x$ |
| $\operatorname{arcosh}x$ | $1/\sqrt{x^2-1}$ | $x>1$ |
| $\operatorname{artanh}x$ | $1/(1-x^2)$ | $\lvert x\rvert<1$ |
| $\operatorname{arcoth}x$ | $1/(1-x^2)$ | $\lvert x\rvert>1$ |
| $\operatorname{arsech}x$ | $-1/(x\sqrt{1-x^2})$ | $0<x<1$ |
| $\operatorname{arcsch}x$ | $-1/(\lvert x\rvert\sqrt{1+x^2})$ | $x\ne0$ |

Useful logarithmic identities are

$$
\operatorname{arsinh}x=\ln(x+\sqrt{x^2+1}),
$$

$$
\operatorname{arcosh}x=\ln(x+\sqrt{x^2-1})\quad(x\ge1),
$$

$$
\operatorname{artanh}x=\frac12\ln\frac{1+x}{1-x}\quad(|x|<1).
$$

These are particularly useful for recognizing antiderivatives involving radicals.

### D.4 Chain-rule patterns to recognize immediately

Every standard table entry becomes a family of formulas by replacing $x$ with $u(x)$ and multiplying by $u'$:

$$
D(e^u)=e^u u',\qquad D(a^u)=a^u\ln(a)\,u',
$$

$$
D(\sin u)=\cos u\,u',\qquad
D(\tan u)=\sec^2u\,u',
$$

$$
D(\arctan u)=\frac{u'}{1+u^2},\qquad
D(\arcsin u)=\frac{u'}{\sqrt{1-u^2}},
$$

$$
D(\ln|u|)=\frac{u'}u,\qquad
D(\sqrt u)=\frac{u'}{2\sqrt u}.
$$

For a nested composition, differentiate the outside, preserve the inside, and multiply by the derivative of each successive inside.

#### Worked example 1 — Nested differentiation

For

$$
y=\ln\bigl(1+\sin^2(3x)\bigr),
$$

there are three layers: logarithm, square of sine, and $3x$. Hence

$$
y'=\frac{1}{1+\sin^2(3x)}
\cdot 2\sin(3x)\cos(3x)\cdot3
=\frac{3\sin(6x)}{1+\sin^2(3x)}.
$$

The logarithm is defined for all real $x$ because its argument is at least $1$.

### D.5 Inverse-function differentiation

If $g=f^{-1}$, $y=f(x)$, and $f'(x)\ne0$, then

$$
g'(y)=\frac1{f'(g(y))}.
$$

Under the usual local inverse-function assumptions, differentiating again gives

$$
g''(y)=-\frac{f''(g(y))}
{\bigl[f'(g(y))\bigr]^3}.
$$

In the notation of inverse variables,

$$
\frac{dx}{dy}=\frac1{dy/dx},
$$

provided $dy/dx\ne0$ and an appropriate local inverse exists. The second derivative is **not** the reciprocal of the original second derivative.

For example, $f(x)=x^3$ is invertible, but $f'(0)=0$; its inverse $x^{1/3}$ has no finite derivative at zero. Invertibility alone does not guarantee a differentiable inverse everywhere.

### D.6 Implicit differentiation

For a relation $F(x,y(x))=0$, apply the chain rule to every occurrence of $y$:

$$
F_x+F_y y'=0.
$$

If $F_y\ne0$,

$$
\boxed{y'=-\frac{F_x}{F_y}}.
$$

If $F\in C^2$, differentiating once more gives

$$
\boxed{
y''=-\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}
}.
$$

This is a local formula along the selected branch. If $F\in C^1$ in a neighborhood of a point satisfying $F=0$, the condition $F_y\ne0$ at that point guarantees a local continuously differentiable solution $y=y(x)$ by the implicit function theorem.

#### Worked example 2 — A circle

For $x^2+y^2=R^2$,

$$
2x+2yy'=0
\quad\Longrightarrow\quad
y'=-\frac{x}{y}.
$$

Differentiating again,

$$
2+2(y')^2+2yy''=0,
$$

so

$$
y''=-\frac{1+(y')^2}{y}
=-\frac{x^2+y^2}{y^3}
=-\frac{R^2}{y^3}.
$$

Both expressions require $y\ne0$. At $(\pm R,0)$, the curve has a vertical tangent; it is more convenient locally to regard $x$ as a function of $y$.

### D.7 Logarithmic differentiation and variable exponents

For a product, quotient, or variable power, taking a logarithm can turn a difficult derivative into a sum of simpler derivatives.

If

$$
y=\prod_{j=1}^m u_j(x)^{a_j},
$$

with constant exponents and positive bases, then

$$
\frac{y'}y=\sum_{j=1}^m a_j\frac{u'_j}{u_j}.
$$

For nonzero real factors where the original powers make sense, $\ln|y|$ and $\ln|u_j|$ often extend the method.

For a **variable base and variable exponent**, assume $u(x)>0$ and write

$$
y=u(x)^{v(x)}=\exp(v\ln u).
$$

Then

$$
\boxed{
y'=u^v\left(v'\ln u+v\frac{u'}u\right)
}.
$$

Using only the ordinary power rule here would omit the $v'\ln u$ term.

#### Worked example 3 — $x^x$

For $x>0$,

$$
y=x^x,\qquad \ln y=x\ln x.
$$

Thus

$$
\frac{y'}y=\ln x+1,\qquad
\boxed{y'=x^x(\ln x+1)}.
$$

The same method gives

$$
D\bigl[(\sin x)^x\bigr]
=(\sin x)^x\bigl(\ln(\sin x)+x\cot x\bigr)
$$

on intervals where $\sin x>0$.

### D.8 Higher derivatives and Leibniz's rule

Define $f^{(0)}=f$ and $f^{(n)}=D^nf$.

The generalized product rule is

$$
\boxed{
D^n(uv)=\sum_{k=0}^n \binom nk u^{(k)}v^{(n-k)}
}.
$$

For three or more factors, use the corresponding multinomial sum.

#### Standard $n$th derivatives

For $n\ge0$ unless otherwise stated:

$$
D^n e^{ax+b}=a^n e^{ax+b},
$$

$$
D^n\sin(ax+b)=a^n\sin\left(ax+b+\frac{n\pi}{2}\right),
$$

$$
D^n\cos(ax+b)=a^n\cos\left(ax+b+\frac{n\pi}{2}\right),
$$

$$
D^n x^r=r(r-1)\cdots(r-n+1)x^{r-n},
$$

where the real power is defined and differentiable. For a polynomial $x^m$ with nonnegative integer $m$, derivatives of order $n>m$ are identically zero, including at $x=0$.

For $n\ge1$ and $x\ne0$,

$$
D^n\ln|x|=(-1)^{n-1}\frac{(n-1)!}{x^n}.
$$

More generally,

$$
D^n(ax+b)^r
=a^n r(r-1)\cdots(r-n+1)(ax+b)^{r-n},
$$

and, with $p>0$ on a suitable domain,

$$
D^n(ax+b)^{-p}
=(-1)^n a^n(p)_n(ax+b)^{-p-n},
$$

where $(p)_n=p(p+1)\cdots(p+n-1)$ is the rising factorial, with $(p)_0=1$.

For example,

$$
D^n\frac1{ax+b}
=(-1)^n n!a^n(ax+b)^{-n-1}.
$$

### D.9 Parametric and polar curves

#### Parametric derivatives

If $x=x(t)$ and $y=y(t)$, with $x'(t)\ne0$, then

$$
\boxed{\frac{dy}{dx}=\frac{y'}{x'}},
$$

$$
\boxed{
\frac{d^2y}{dx^2}
=\frac1{x'}\frac{d}{dt}\left(\frac{y'}{x'}\right)
=\frac{x'y''-y'x''}{(x')^3}
}.
$$

Primes on $x,y$ here mean derivatives with respect to $t$.

The speed is

$$
\frac{ds}{dt}=\sqrt{(x')^2+(y')^2}.
$$

At a regular point, where this speed is nonzero, the unsigned curvature is

$$
\boxed{
\kappa=\frac{|x'y''-y'x''|}
{\bigl((x')^2+(y')^2\bigr)^{3/2}}
}.
$$

For a graph $y=f(x)$ this reduces to

$$
\kappa=\frac{|f''(x)|}{(1+(f'(x))^2)^{3/2}}.
$$

The radius of curvature is $\rho=1/\kappa$ when $\kappa>0$.

#### Worked example 4 — Parametric curve

Take $x=t^2,\ y=t^3$. For $t\ne0$,

$$
\frac{dy}{dx}=\frac{3t^2}{2t}=\frac32t,
$$

$$
\frac{d^2y}{dx^2}
=\frac1{2t}\frac{d}{dt}\left(\frac32t\right)
=\frac3{4t}.
$$

At $t=0$, both coordinate derivatives vanish, so the direct quotient formulas do not apply. Limits and the geometry of the two branches must be examined separately.

#### Polar derivatives

For $r=r(\theta)$,

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Writing $r'=dr/d\theta$,

$$
\boxed{
\frac{dy}{dx}
=\frac{r'\sin\theta+r\cos\theta}
{r'\cos\theta-r\sin\theta}
}
$$

when the denominator is nonzero. For second derivatives, apply the parametric formula with parameter $\theta$.

The polar arc-speed factor and curvature are

$$
\frac{ds}{d\theta}=\sqrt{r^2+(r')^2},
$$

$$
\boxed{
\kappa=
\frac{|r^2+2(r')^2-r r''|}
{(r^2+(r')^2)^{3/2}}
}
$$

at regular points. The numerator without its absolute value is a signed curvature for the chosen orientation.

### D.10 Tangents, normals, and local differentials

At $(a,f(a))$, if the derivative is finite, the tangent line is

$$
y-f(a)=f'(a)(x-a).
$$

If $f'(a)\ne0$, the normal line is

$$
y-f(a)=-\frac1{f'(a)}(x-a).
$$

A horizontal tangent has a vertical normal. A regular vertical tangent has a horizontal normal. A zero derivative does not by itself determine whether the graph crosses its tangent or lies on one side.

#### Differential versus finite change

For a small input increment $h$,

$$
\Delta y=f(x+h)-f(x),
\qquad dy=f'(x)\,dx,\qquad dx=h.
$$

$dy$ is a linear approximation to $\Delta y$, not generally the exact finite change:

$$
\Delta y=dy+o(h).
$$

If $|f''|\le M$ on the segment between $x$ and $x+h$, then

$$
|\Delta y-f'(x)h|\le\frac{M}{2}h^2.
$$

For example, $\sqrt{1+h}\approx1+h/2$ for small $h$.

#### Error propagation

For a small perturbation $\Delta x$,

$$
|\Delta f|\approx |f'(x)|\,|\Delta x|.
$$

If $x\ne0$ and $f(x)\ne0$,

$$
\frac{|\Delta f|}{|f(x)|}
\approx
\left|\frac{x f'(x)}{f(x)}\right|
\frac{|\Delta x|}{|x|}.
$$

The factor $|x f'(x)/f(x)|$ is a local relative condition number. It measures how relative input errors can be amplified by the mathematical function, independently of the algorithm used to evaluate it.

### D.11 Related rates

1. Write a geometric or physical relation valid throughout the motion.
2. Identify all quantities that depend on time.
3. Differentiate with respect to time before substituting instantaneous values.
4. Substitute the given measurements and rates.
5. Check units and signs.

For $F(x(t),y(t))=0$,

$$
F_x\dot x+F_y\dot y=0.
$$

#### Worked example 5 — Expanding sphere

For $V=(4\pi/3)r^3$,

$$
\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}.
$$

If $dV/dt=12\pi\ \mathrm{cm^3/s}$ and $r=3\ \mathrm{cm}$, then

$$
\frac{dr}{dt}=\frac{12\pi}{4\pi(3)^2}
=\frac13\ \mathrm{cm/s}.
$$

The factor $4\pi r^2$ changes with time; substitute $r=3$ only after deriving the relation.

### D.12 Mean value theorems

#### Rolle's theorem

If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then some $c\in(a,b)$ satisfies

$$
f'(c)=0.
$$

#### Lagrange's mean value theorem

If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then some $c\in(a,b)$ satisfies

$$
\boxed{f'(c)=\frac{f(b)-f(a)}{b-a}}.
$$

The average slope equals an instantaneous slope somewhere inside the interval.

#### Cauchy's mean value theorem

If $f,g$ are continuous on $[a,b]$ and differentiable on $(a,b)$, then some $c\in(a,b)$ satisfies

$$
(f(b)-f(a))g'(c)=(g(b)-g(a))f'(c).
$$

If the relevant denominators are nonzero, this becomes

$$
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(c)}{g'(c)}.
$$

The cross-multiplied version is the more general statement.

#### Frequently used consequences

- If $f'=0$ everywhere on an interval, $f$ is constant on that interval.
- If $f'\ge0$ on an interval, $f$ is nondecreasing; $f'>0$ implies strictly increasing. Strict increase does not require $f'>0$ at every point: $x^3$ is a counterexample.
- If $|f'|\le M$ on an interval, then $|f(x)-f(y)|\le M|x-y|$ there.
- If $f'=g'$ on an interval, $f-g$ is constant there. On a disconnected domain, different components may have different constants.
- Derivatives have the **intermediate value property** (Darboux's theorem), even when they are discontinuous. A derivative cannot have a jump discontinuity.

### D.13 L'Hôpital's rule and indeterminate limits

For a limit of $f(x)/g(x)$ producing $0/0$ or $\infty/\infty$, one useful sufficient version of the theorem assumes:

- $f$ and $g$ are differentiable in the relevant punctured one-sided neighborhood;
- $g'(x)\ne0$ there;
- the original ratio has one of the stated indeterminate forms;
- $\lim f'(x)/g'(x)=L$ exists, finite or infinite.

Then, under these hypotheses,

$$
\boxed{\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}=L}.
$$

The rule applies to one-sided limits and to limits at infinity. For a two-sided limit, both sides must give the same result. “$\infty/\infty$” includes the appropriate signed infinite versions.

**This is a theorem about limits, not a differentiation identity for quotients.** The quotient rule remains $(f/g)'=(f'g-fg')/g^2$.

#### Other indeterminate forms

| Form | Typical transformation |
|---|---|
| $0\cdot\infty$ | Rewrite $fg=f/(1/g)$ or $g/(1/f)$ |
| $\infty-\infty$ | Combine fractions, rationalize, or factor before applying a ratio theorem |
| $1^\infty$ | Let $y=u^v>0$, study $\ln y=v\ln u$, then exponentiate |
| $0^0$ | Use the same logarithmic transformation on a positive-base domain |
| $\infty^0$ | Use the same logarithmic transformation |
| $0/0$, $\infty/\infty$ | Direct candidates, after checking hypotheses |

Repeated application is permitted only if the new ratio still satisfies the hypotheses. If the derivative ratio fails to have a limit, this does **not** prove that the original limit fails to exist.

#### Worked example 6 — A second-order limit

$$
\lim_{x\to0}\frac{e^x-1-x}{x^2}.
$$

The form is $0/0$, and after one differentiation it is still $0/0$:

$$
\lim_{x\to0}\frac{e^x-1}{2x}
=\lim_{x\to0}\frac{e^x}{2}
=\frac12.
$$

A Taylor expansion gives the same answer because $e^x-1-x=x^2/2+O(x^3)$.

### D.14 Monotonicity, extrema, and concavity

#### Critical numbers and stationary points

A critical number is an interior point in the domain where $f'(x)=0$ or $f'(x)$ does not exist. A stationary point specifically has $f'(x)=0$.

**Fermat's theorem:** if $f$ has a local maximum or minimum at an interior point $c$ and is differentiable there, then $f'(c)=0$.

The converse fails: $x^3$ has $f'(0)=0$ but no extremum at zero. Nondifferentiable extrema are possible, as for $|x|$ at zero. At constrained endpoints, a nonzero one-sided slope can coexist with an extremum.

#### First derivative sign test

Assume continuity at $c$ and differentiability on neighboring punctured intervals.

| Sign of $f'$ as $x$ passes through $c$ | Conclusion |
|---|---|
| $+\to-$ | Strict local maximum |
| $-\to+$ | Strict local minimum |
| $+\to+$ or $-\to-$ | No local extremum under the stated sign pattern |

#### Second derivative test

If $f'(c)=0$ and the required second derivative exists,

$$
f''(c)>0\Rightarrow\text{strict local minimum},
$$

$$
f''(c)<0\Rightarrow\text{strict local maximum},
$$

$$
f''(c)=0\Rightarrow\text{test inconclusive}.
$$

Examples of the inconclusive case are $x^4$ (minimum), $-x^4$ (maximum), and $x^3$ (neither).

#### Higher derivative test

Suppose $f$ is sufficiently smooth near $c$ and

$$
f'(c)=\cdots=f^{(m-1)}(c)=0,\qquad f^{(m)}(c)\ne0.
$$

If $m$ is even, a positive $f^{(m)}(c)$ gives a strict local minimum and a negative value a strict local maximum. If $m$ is odd, there is no local extremum. If every derivative vanishes, this test gives no conclusion.

#### Concavity and inflection points

On an interval, $f''>0$ implies concave up, and $f''<0$ implies concave down. Under suitable smoothness, $f''\ge0$ characterizes convexity and $f''\le0$ characterizes concavity.

Under the usual definition, an inflection point is a point where $f$ is continuous and the graph changes concavity. Solving $f''(x)=0$ only identifies candidates. A point where $f''$ does not exist may also be an inflection candidate.

For $f(x)=x^4$, $f''(0)=0$ but the graph is concave up on both sides: no inflection. For $f(x)=x^3$, concavity changes at zero.

#### Absolute extrema on a closed interval

If $f$ is continuous on $[a,b]$, it attains an absolute maximum and minimum. Evaluate it at:

1. all interior critical numbers;
2. the endpoints $a,b$.

Compare the values. For an open or unbounded domain, inspect boundary limits and behavior at infinity; extrema need not be attained.

### D.15 Taylor's theorem and error bounds

The degree-$n$ Taylor polynomial about $a$ is

$$
\boxed{
T_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k
}.
$$

Maclaurin means $a=0$.

#### Lagrange remainder

If $f$ has sufficient smoothness, for example $f\in C^{n+1}$ on the interval joining $a$ and $x$, then

$$
f(x)=T_n(x)+R_n(x),
$$

$$
\boxed{
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}
}
$$

for some $\xi$ strictly between $a$ and $x$ when $a\ne x$.

If $|f^{(n+1)}|\le M$ throughout that segment,

$$
\boxed{
|R_n(x)|\le\frac{M|x-a|^{n+1}}{(n+1)!}
}.
$$

The bound needs control over the entire segment, not just the value of the next derivative at $a$.

#### Integral remainder

Under the corresponding continuity assumptions,

$$
\boxed{
R_n(x)=\frac1{n!}\int_a^x f^{(n+1)}(t)(x-t)^n\,dt
}.
$$

#### Peano form

For $f\in C^n$ near $a$,

$$
f(a+h)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}h^k+o(h^n).
$$

This is often the cleanest form for local asymptotic reasoning.

#### Taylor series versus Taylor polynomial

The infinite Taylor series represents $f$ only where $R_n(x)\to0$ as $n\to\infty$. Having derivatives of every order does not guarantee this.

A standard example is

$$
f(x)=
\begin{cases}
e^{-1/x^2},&x\ne0,\\
0,&x=0.
\end{cases}
$$

Every derivative at zero is zero, so its Taylor series there is identically zero, although $f(x)>0$ for $x\ne0$.

#### Worked example 7 — Approximation with a certified bound

For $f(x)=\ln(1+x)$, the quadratic approximation at zero gives

$$
\ln(1.1)\approx0.1-\frac{0.1^2}{2}=0.095.
$$

Since $f'''(x)=2/(1+x)^3$, we have $|f'''(x)|\le2$ on $[0,0.1]$. Therefore

$$
|\ln(1.1)-0.095|
\le\frac{2(0.1)^3}{3!}
=\frac1{3000}\approx0.0003333.
$$

The cubic correction improves the approximation further, but the displayed estimate already has a rigorous error bound.

### D.16 Core Maclaurin expansions

| Function | Expansion | Real interval of convergence and equality |
|---|---|---|
| $\dfrac1{1-x}$ | $\displaystyle\sum_{n=0}^\infty x^n$ | $\lvert x\rvert<1$ |
| $\dfrac1{1+x}$ | $\displaystyle\sum_{n=0}^\infty(-1)^n x^n$ | $\lvert x\rvert<1$ |
| $e^x$ | $\displaystyle\sum_{n=0}^\infty x^n/n!$ | All real $x$ |
| $\sin x$ | $\displaystyle\sum_{n=0}^\infty(-1)^n x^{2n+1}/(2n+1)!$ | All real $x$ |
| $\cos x$ | $\displaystyle\sum_{n=0}^\infty(-1)^n x^{2n}/(2n)!$ | All real $x$ |
| $\sinh x$ | $\displaystyle\sum_{n=0}^\infty x^{2n+1}/(2n+1)!$ | All real $x$ |
| $\cosh x$ | $\displaystyle\sum_{n=0}^\infty x^{2n}/(2n)!$ | All real $x$ |
| $\ln(1+x)$ | $\displaystyle\sum_{n=1}^\infty(-1)^{n-1}x^n/n$ | $-1<x\le1$ |
| $\ln(1-x)$ | $\displaystyle-\sum_{n=1}^\infty x^n/n$ | $-1\le x<1$ |
| $\arctan x$ | $\displaystyle\sum_{n=0}^\infty(-1)^n x^{2n+1}/(2n+1)$ | $-1\le x\le1$ |
| $\arcsin x$ | $\displaystyle\sum_{n=0}^\infty \frac{(2n)!}{4^n(n!)^2(2n+1)}x^{2n+1}$ | $-1\le x\le1$ |
| $\operatorname{artanh}x$ | $\displaystyle\sum_{n=0}^\infty x^{2n+1}/(2n+1)$ | $\lvert x\rvert<1$ |
| $(1+x)^\alpha$ | $\displaystyle\sum_{n=0}^\infty\binom{\alpha}{n}x^n$ | At least $\lvert x\rvert<1$; see endpoint rules below |

Here

$$
\binom{\alpha}{n}
=\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!},
\qquad
\binom{\alpha}{0}=1.
$$

If $\alpha$ is a nonnegative integer, the binomial series terminates and is a polynomial valid for every real $x$. Otherwise, for real $\alpha$:

- At $x=1$, it converges to $2^\alpha$ when $\alpha>-1$; convergence is absolute for $\alpha>0$ and conditional for $-1<\alpha<0$.
- At $x=-1$, it converges when $\alpha>0$, then sums to $0$; it diverges for $\alpha<0$.

For frequently needed leading terms,

$$
e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+O(x^4),
$$

$$
\sin x=x-\frac{x^3}{6}+\frac{x^5}{120}+O(x^7),
$$

$$
\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+O(x^6),
$$

$$
\tan x=x+\frac{x^3}{3}+\frac{2x^5}{15}+O(x^7),
$$

$$
\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}+O(x^4),
$$

$$
\sqrt{1+x}=1+\frac{x}{2}-\frac{x^2}{8}+\frac{x^3}{16}+O(x^4).
$$

A power series may be differentiated or integrated term by term strictly inside its radius of convergence. The resulting series has the same radius, but endpoint convergence can change.

For alternating series whose term magnitudes decrease to zero, the error after truncation is at most the magnitude of the first omitted term. Check the decreasing-term condition for the specific value of $x$.

### D.17 Asymptotic notation and small-angle equivalents

As $x\to a$:

- $f(x)=O(g(x))$ means $|f(x)|\le C|g(x)|$ near $a$, for some fixed $C$.
- $f(x)=o(g(x))$ means $f(x)/g(x)\to0$.
- $f(x)\sim g(x)$ means $f(x)/g(x)\to1$, where the ratio is defined.

As $x\to0$,

$$
\sin x\sim x,\quad \tan x\sim x,\quad
\arcsin x\sim x,\quad \arctan x\sim x,
$$

$$
e^x-1\sim x,\qquad
\ln(1+x)\sim x,\qquad
1-\cos x\sim\frac{x^2}{2},
$$

$$
(1+x)^\alpha-1\sim\alpha x\quad(\alpha\ne0).
$$

Equivalent expressions can usually replace one another in products and quotients, but **not blindly inside a cancellation**. Replacing both $\sin x$ and $x$ by $x$ inside $\sin x-x$ would erase the actual leading term $-x^3/6$.

At infinity, for any fixed $\varepsilon>0$ and positive $m$,

$$
\ln x=o(x^\varepsilon),\qquad x^m=o(e^x).
$$

Changing variables can reduce many apparently complicated limits to these standard forms.

### D.18 Optimization workflow and Newton's method

#### One-variable optimization workflow

1. Identify the quantity to maximize or minimize.
2. Express it using one variable and record the feasible domain.
3. Differentiate and find interior critical points.
4. Check endpoints, singularities, and limiting behavior.
5. Establish local or global optimality using sign, convexity, or value comparisons.
6. Return the answer in the original variables and units.

#### Worked example 8 — A global minimum

Minimize $f(x)=x+1/x$ on $x>0$.

$$
f'(x)=1-\frac1{x^2},\qquad
f''(x)=\frac2{x^3}>0.
$$

The unique critical point is $x=1$. The derivative is negative on $(0,1)$ and positive on $(1,\infty)$, so it is the global minimum:

$$
\boxed{f(1)=2}.
$$

The domain restriction matters; the same objective on $x\ne0$ has different global behavior.

#### Newton–Raphson root finding

The tangent-line approximation to $f$ at $x_k$ has a zero at

$$
\boxed{x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}}.
$$

For a simple root $r$, with $f(r)=0$, $f'(r)\ne0$, and suitable smoothness, sufficiently close initial points give local quadratic convergence:

$$
e_{k+1}
=\frac{f''(r)}{2f'(r)}e_k^2+o(e_k^2),
\qquad e_k=x_k-r.
$$

This is a local guarantee. Farther away, Newton's method may diverge, cycle, or leave the function's domain; a zero or tiny derivative is problematic.

If a root has known multiplicity $m$, the modified iteration

$$
x_{k+1}=x_k-m\frac{f(x_k)}{f'(x_k)}
$$

can restore quadratic local convergence under the usual smoothness assumptions.

To seek a stationary point, apply Newton to $f'$:

$$
x_{k+1}=x_k-\frac{f'(x_k)}{f''(x_k)}.
$$

This seeks a zero of the derivative; it does not by itself guarantee convergence to a minimum.

### D.19 Numerical differentiation

For a smooth function and small $h\ne0$:

| Scheme | Approximation | Truncation error order |
|---|---|---|
| Forward first difference | $[f(x+h)-f(x)]/h$ | $O(h)$ |
| Backward first difference | $[f(x)-f(x-h)]/h$ | $O(h)$ |
| Central first difference | $[f(x+h)-f(x-h)]/(2h)$ | $O(h^2)$ |
| Central second difference | $[f(x+h)-2f(x)+f(x-h)]/h^2$ | $O(h^2)$ |
| Five-point first difference | $[f(x-2h)-8f(x-h)+8f(x+h)-f(x+2h)]/(12h)$ | $O(h^4)$ |

For sufficiently smooth $f$, the leading errors of the central schemes are

$$
\frac{f(x+h)-f(x-h)}{2h}
=f'(x)+\frac{h^2}{6}f'''(x)+O(h^4),
$$

$$
\frac{f(x+h)-2f(x)+f(x-h)}{h^2}
=f''(x)+\frac{h^2}{12}f^{(4)}(x)+O(h^4).
$$

Very small $h$ reduces truncation error but can amplify floating-point roundoff and cancellation. For well-scaled problems with unit-roundoff $\epsilon$, rough balances give $h\propto\epsilon^{1/2}$ for a forward first derivative, $\epsilon^{1/3}$ for a central first derivative, and $\epsilon^{1/4}$ for a central second derivative. Actual choices depend on input/output scales, derivative sizes, noise, and evaluation accuracy.

If a central estimate has an expansion $D(h)=f'(x)+c_2h^2+O(h^4)$, **Richardson extrapolation** cancels the leading error:

$$
\frac{4D(h/2)-D(h)}3=f'(x)+O(h^4).
$$

This improves truncation accuracy for smooth functions; it does not remove measurement noise or floating-point limitations.

#### Complex-step differentiation

If $f$ has a suitable analytic complex extension and its implementation supports that extension,

$$
f'(x)\approx\frac{\operatorname{Im}f(x+ih)}h
$$

has $O(h^2)$ truncation error and avoids subtracting two nearly equal real values. Operations such as absolute value, clipping, and branches that discard imaginary parts can invalidate this method.

#### Automatic differentiation

Automatic differentiation applies the chain rule to the operations in a computational graph. It avoids a finite-difference step-size approximation, but floating-point errors, nondifferentiable operations, and conventions at branch boundaries still require attention.

### D.20 Technique-selection table

| What you see | First method to try |
|---|---|
| A sum of standard functions | Linearity and the derivative table |
| A function inside another function | Chain rule |
| A product of functions | Product rule; logarithmic differentiation for many nonzero factors |
| A quotient | Simplify first, then quotient rule if useful |
| A variable exponent | Write $u^v=\exp(v\ln u)$ |
| An implicit relation | Differentiate the relation; solve for $y'$ |
| A local inverse | Reciprocal derivative formula with a nonzero derivative |
| Coordinates depending on a parameter | Parametric derivative formulas |
| A polar curve | Convert to parametric $x(\theta),y(\theta)$ |
| A limit with cancellation | Taylor expansion or algebraic simplification |
| A ratio of type $0/0$ or $\infty/\infty$ | L'Hôpital after checking hypotheses |
| A local approximation or error estimate | Linearization or Taylor's theorem |
| A maximum/minimum on a closed interval | Interior critical points plus endpoints |
| A general $n$th derivative of a product | Leibniz's rule |
| A root available only numerically | Newton with a convergence check or a bracketed method |
| A derivative of numerical black-box output | Finite differences, complex step if valid, or automatic differentiation if supported |

### D.21 High-frequency mistakes to avoid

- **Missing an inner derivative:** $D(\sin(x^2))=2x\cos(x^2)$.
- **Multiplying derivatives for a product:** $(uv)'\ne u'v'$.
- **Dividing derivatives for a quotient:** $(u/v)'\ne u'/v'$.
- **Treating $u^v$ as a constant-exponent power:** differentiate both the base and the exponent.
- **Dropping domain restrictions:** $\ln x$, inverse functions, and fractional powers require explicit attention.
- **Losing absolute values:** $D(\ln|x|)=1/x$ for both positive and negative $x$.
- **Applying L'Hôpital to a non-indeterminate ratio:** check the original limiting form first.
- **Confusing $f'(c)=0$ with a minimum or maximum:** it supplies a candidate.
- **Confusing $f''(c)=0$ with an inflection point:** verify a concavity change.
- **Ignoring nondifferentiable critical points or endpoints:** either can contain an extremum.
- **Assuming every smooth function equals its Taylor series:** the remainder must vanish.
- **Using a truncated Taylor series outside its useful range without an error bound.**
- **Substituting instantaneous values before taking a related-rates derivative.**
- **Treating $\Delta y=dy$ as exact for nonlinear functions.**
- **Letting a numerical differentiation step become arbitrarily small:** roundoff and noise can dominate.
- **Canceling differential symbols indiscriminately:** chain-rule manipulations have precise differentiability and nonzero-denominator conditions.

#### Minimal memory core

If revising under time pressure, first reproduce these from memory:

$$
(uv)'=u'v+uv',\qquad
\left(\frac uv\right)'=\frac{u'v-uv'}{v^2},\qquad
(f\circ g)'=(f'\circ g)g',
$$

$$
\frac{d}{dx}\ln|u|=\frac{u'}u,\qquad
\frac{d}{dx}u^v=u^v\left(v'\ln u+v\frac{u'}u\right),
$$

$$
y'=-\frac{F_x}{F_y},\qquad
\frac{dy}{dx}=\frac{dy/dt}{dx/dt},
$$

$$
f(a+h)=f(a)+f'(a)h+\frac12f''(a)h^2+o(h^2),
$$

$$
T_n(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k,\qquad
|R_n(x)|\le\frac{M|x-a|^{n+1}}{(n+1)!}.
$$

Then rebuild less familiar formulas from these rules and the standard derivative table.

### D.22 Tensor derivatives and Einstein index notation

A derivative is a linear map that describes how an input perturbation changes an output. Scalars, vectors, matrices, and higher-order arrays use the same definition; only the number of component indices changes. This section works with **real-valued arrays and independent entries**, using the Euclidean or Frobenius inner product. Complex derivatives and derivatives on constrained manifolds require additional conventions.

#### Free indices, dummy indices, and contractions

Under strict Einstein summation, an index appearing twice in one product term is summed over its range. An index appearing once is free and must match a free index on the other side of the equation.

$$
y_i=A_{ij}x_j
\quad\Longleftrightarrow\quad
y_i=\sum_{j=1}^{n}A_{ij}x_j.
$$

Here $i$ is free and $j$ is a dummy summation index. Renaming a dummy index does not change the expression:

$$
A_{ij}x_j=A_{ik}x_k.
$$

Matrix multiplication and the Frobenius inner product become

$$
C_{ik}=A_{ij}B_{jk},\qquad
\langle A,B\rangle_F=A_{ij}B_{ij}
=\operatorname{tr}(A^TB).
$$

Every index in the scalar inner product is summed. In a valid contraction, a dummy index has one consistent dimension and normally appears exactly twice per product term. An index appearing three times is ambiguous under this convention; use explicit summation or rewrite the contraction.

**Important exceptions must be declared.** Elementwise multiplication is

$$
y_i=u_iv_i\qquad\text{with no sum over }i,
$$

or, more clearly, $y=u\odot v$. Likewise, $A_{ii}$ normally means the trace; extracting a diagonal vector requires $d_i=A_{ii}$ **with no sum over $i$**.

All indices here are Euclidean component labels. This is not the covariant/contravariant convention of differential geometry; the placement of an index above or below a symbol does not itself change its transformation law in this chapter.

#### Batch indices are not automatically contraction indices

For batched matrix multiplication, write

$$
C^{(b)}_{ij}=A^{(b)}_{ik}B^{(b)}_{kj},
$$

where the parenthesized $b$ labels a fixed batch member and is **not summed**. Equivalently,

$$
C_{bij}=\sum_k A_{bik}B_{bkj}.
$$

Writing the sum explicitly prevents accidental summation over the batch axis.

Array-library `einsum` notation is more flexible than strict Einstein notation because its output labels explicitly identify retained axes. For example, `bi,bj->bij` retains $b$ and forms a separate outer product for each batch member; it does not sum over $b$. An `einsum` expression specifies a contraction, not an automatic derivative by itself.

#### Kronecker delta and identity derivatives

The Kronecker delta is

$$
\delta_{ij}=\begin{cases}1,&i=j,\\0,&i\ne j.\end{cases}
$$

It acts as the identity: $\delta_{ij}x_j=x_i$. For independent entries,

$$
\frac{\partial x_i}{\partial x_j}=\delta_{ij},\qquad
\frac{\partial X_{ij}}{\partial X_{kl}}=\delta_{ik}\delta_{jl}.
$$

The second formula has four free indices. It is the identity linear map on matrices, represented as a four-axis derivative array.

**Terminology:** tensor *order* means the number of axes. It is different from matrix rank and from tensor-decomposition rank.

### D.23 Derivative tensors, gradients, and the tensor chain rule

#### Output axes first, then input axes

Let $Y=F(X)$, with

$$
X\in\mathbb R^{n_1\times\cdots\times n_q},\qquad
Y\in\mathbb R^{m_1\times\cdots\times m_p}.
$$

Use multi-indices $I=(i_1,\ldots,i_p)$ and $J=(j_1,\ldots,j_q)$. Define

$$
\boxed{\mathcal J_{I,J}=\frac{\partial Y_I}{\partial X_J}.}
$$

Its shape is

$$
(m_1,\ldots,m_p,n_1,\ldots,n_q).
$$

This is the convention **output axes, then input axes**. Flattening the output and input turns it into an ordinary $M\times N$ Jacobian, where $M=\prod_a m_a$ and $N=\prod_b n_b$.

The differential contracts the input axes:

$$
\boxed{dY_I=\mathcal J_{I,J}\,dX_J.}
$$

Repeated multi-indices mean summation over every constituent index. More fundamentally, differentiability requires

$$
F(X+H)=F(X)+DF(X)[H]+o(\|H\|_F),
$$

where $DF(X)$ is linear in $H$. The derivative tensor is a coordinate representation of that linear map; a program usually does not need to construct the full tensor.

#### A gradient is the derivative representation for a scalar objective

For $L(X)\in\mathbb R$,

$$
dL=\frac{\partial L}{\partial X_J}dX_J
=\langle\nabla_XL,dX\rangle_F.
$$

Thus $\nabla_XL$ has the same shape as $X$. For a matrix,

$$
dL=\operatorname{tr}\big((\nabla_XL)^TdX\big).
$$

A tensor-valued $F$ generally has a Jacobian, not one unique gradient. To obtain a gradient, first specify a scalar objective, such as

$$
L(X)=\langle U,F(X)\rangle_F
$$

with fixed $U$. Different output weights $U$ give different scalarizations and therefore different gradients.

#### Tensor chain rule

For $Y=F(X)$ and $Z=G(Y)$,

$$
\boxed{
\frac{\partial Z_A}{\partial X_J}
=\frac{\partial Z_A}{\partial Y_I}
 \frac{\partial Y_I}{\partial X_J}.
}
$$

The intermediate axes $I$ contract. The output axes $A$ and input axes $J$ remain free. If a node depends on several parents, its total differential contains one term for every parent; all paths from an input to the output contribute.

An index block is an ordered tuple of axes, not necessarily one vector dimension. For example, $I=(i_1,i_2)$ can collect two batch or spatial axes while $J=(j_1,j_2,j_3)$ collects three feature axes. Writing $\sum_J$ sums over their Cartesian product. Grouping axes changes the notation, not the underlying derivative.

#### Independent entries versus symmetric parameters

The identity $\partial X_{ij}/\partial X_{kl}=\delta_{ik}\delta_{jl}$ assumes all entries are independent. If $X=X^T$ is constrained, its perturbations must also be symmetric. For an ambient gradient $G$,

$$
dL=\langle G,dX\rangle_F
=\left\langle\frac{G+G^T}{2},dX\right\rangle_F
\qquad(dX=dX^T).
$$

If independent upper-triangular parameters set both $X_{ij}$ and $X_{ji}$, an off-diagonal parameter receives $G_{ij}+G_{ji}$, while a diagonal parameter receives $G_{ii}$. These are different parameterizations of the same constraint; do not apply a universal factor of two without specifying which entries are independent.

### D.24 Forward mode, reverse mode, and computational graphs

Automatic differentiation, or **AD**, applies derivative rules to the mathematical operations in a computation. It is different from finite differences: there is no perturbation step size to choose. For smooth supported operations, it computes chain-rule derivatives up to floating-point arithmetic effects. It is also different from requiring a simplified symbolic formula for the whole function.

#### Forward mode: propagate input tangents

Choose an input perturbation $V$ and write $\dot X=V$. Forward mode propagates

$$
\boxed{\dot Y_I=\mathcal J_{I,J}\dot X_J.}
$$

This is a **Jacobian-vector product**, or JVP. In tensor language, the “vector” can be any tangent array having the input shape. It returns the directional output change, with the output shape.

Along a composition,

$$
\dot Z=DG(Y)[DF(X)[\dot X]].
$$

Forward mode evaluates each operation's primal value and tangent as the computation proceeds. A scalar example is

$$
y=\sin x
\quad\Longrightarrow\quad
\dot y=\cos x\,\dot x.
$$

#### Reverse mode: propagate output cotangents

Choose an output weight $U$, written $\bar Y=U$. Reverse mode propagates

$$
\boxed{\bar X_J=\bar Y_I\mathcal J_{I,J}.}
$$

This is a **vector-Jacobian product**, or VJP. With column-vector conventions it is $J_F^TU$; row-vector notation writes $U^TJ_F$. For general arrays it is the adjoint derivative map

$$
\bar X=DF(X)^*[U].
$$

The defining identity is

$$
\langle U,DF(X)[V]\rangle_F
=\langle DF(X)^*[U],V\rangle_F.
$$

#### Retaining every axis of a downstream tensor

No scalar output is required to state the chain rule. Suppose a downstream observable is a tensor $O_A=G_A(Y)$, and retain its complete derivative

$$
\mathcal B_{A,I}=\frac{\partial O_A}{\partial Y_I}.
$$

Propagation through $Y=F(X)$ gives

$$
\boxed{
\mathcal C_{A,J}=\frac{\partial O_A}{\partial X_J}
=\mathcal B_{A,I}\mathcal J_{I,J}.
}
$$

The observable block $A$ remains free throughout. This is a family of pullbacks, one for each observable component, rather than one scalar-objective gradient. Contracting with a fixed output weight $U_A$ gives a single cotangent:

$$
\bar X_J=U_A\mathcal C_{A,J}
=U_A\mathcal B_{A,I}\mathcal J_{I,J}.
$$

Keeping all observable axes is useful when deriving a kernel's full derivative structure. Computing all those sensitivities still carries the corresponding number of output seed directions; representing them in a single tensor does not remove that cost.

#### Scalar reverse differentiation as a special case

For scalar $L$, seed $\bar L=1$. The resulting input cotangent is $\nabla_XL$. For a multi-output function, a single VJP gives one weighted combination of Jacobian rows; it does not automatically give the entire Jacobian.

Backpropagation is reverse-mode AD applied to a computational graph. It propagates cotangents in reverse topological order. Every outgoing use of a variable contributes to its cotangent, so contributions must be **added**.

#### Worked graph: reuse requires accumulation

Consider

$$
a=x\cdot x,\qquad b=a\cdot x,\qquad L=a+b=x^2+x^3.
$$

Initialize every cotangent to zero except the seed $\bar L=1$. The sum contributes $\bar a\mathrel{+}=1$ and $\bar b\mathrel{+}=1$. Reversing $b=ax$ contributes

$$
\bar a\mathrel{+}=\bar b\,x=x,\qquad
\bar x\mathrel{+}=\bar b\,a=a.
$$

Now $\bar a=1+x$. Reversing $a=x\cdot x$ contributes along both appearances of $x$:

$$
\bar x\mathrel{+}=2x\bar a.
$$

Therefore

$$
\bar x=x^2+2x(1+x)=2x+3x^2.
$$

Overwriting a previous contribution would lose one or more paths.

#### Fixed cotangents and scalarization

The identity $\nabla_X\langle U,F(X)\rangle_F=DF(X)^*[U]$ treats $U$ as independent of $X$. If $U=U(X)$ is itself differentiated, the product rule adds another term:

$$
\nabla_X\langle U(X),F(X)\rangle_F
=DF(X)^*[U(X)]+DU(X)^*[F(X)].
$$

This distinction becomes essential for higher derivatives. A fixed external seed should remain fixed; genuine dependence inside the objective must remain part of the differentiated computation.

### D.25 Local tensor derivative rules

Each local rule has a forward linearization and a reverse adjoint. The latter can be derived by moving the input perturbation to the right side of a Frobenius inner product.

#### Arbitrary contraction blocks

Let $A,B,C$ denote disjoint ordered index blocks. A bilinear contraction can be written

$$
Y_{AB}=X_{AC}W_{CB}.
$$

Only $C$ contracts; $A,B$ label the output. Its linearization and pullback are

$$
\dot Y_{AB}=\dot X_{AC}W_{CB}+X_{AC}\dot W_{CB},
$$

$$
\boxed{\bar X_{AC}=\bar Y_{AB}W_{CB},\qquad
\bar W_{CB}=X_{AC}\bar Y_{AB}.}
$$

In the first reverse rule $B$ contracts; in the second $A$ contracts. These formulas hold for arbitrary numbers of axes inside each block. Ordinary matrix multiplication is the case of one axis per block. Independent batch axes can be retained as additional fixed labels; a shared factor receives sums over all its uses.

#### Elementwise functions and products

For $Y=\phi(X)$ applied entrywise,

$$
dY=\phi'(X)\odot dX,\qquad
\bar X=\bar Y\odot\phi'(X).
$$

Componentwise, for vector input,

$$
\frac{\partial Y_i}{\partial X_j}
=\phi'(X_i)\delta_{ij}
\qquad\text{with no sum over }i,j.
$$

The Jacobian is diagonal after flattening. For $Y=A\odot B$ of equal-shaped arrays,

$$
dY=dA\odot B+A\odot dB,
$$

$$
\bar A=\bar Y\odot B,\qquad
\bar B=\bar Y\odot A.
$$

Broadcasted operands additionally require the reverse reductions described below.

#### Matrix multiplication

For $Y=AB$, where $A\in\mathbb R^{m\times k}$ and $B\in\mathbb R^{k\times n}$,

$$
Y_{ij}=A_{ir}B_{rj},\qquad
\boxed{dY=(dA)B+A(dB).}
$$

The local derivative entries are

$$
\frac{\partial Y_{ij}}{\partial A_{st}}
=\delta_{is}B_{tj},\qquad
\frac{\partial Y_{ij}}{\partial B_{st}}
=A_{is}\delta_{jt}.
$$

From $dL=\operatorname{tr}(\bar Y^TdY)$,

$$
\boxed{\bar A=\bar YB^T,\qquad \bar B=A^T\bar Y.}
$$

In indices,

$$
\bar A_{ir}=\bar Y_{ij}B_{rj},\qquad
\bar B_{rj}=A_{ir}\bar Y_{ij}.
$$

If both operands are the same square matrix, $Y=X^2$, add both contributions:

$$
\bar X=\bar YX^T+X^T\bar Y.
$$

The factors cannot generally be reordered. For a scalar $L=\operatorname{tr}(X^2)$, this reduces to $\nabla_XL=2X^T$, not $2X$ unless $X$ is symmetric.

#### Transpose, permutation, reshape, and reduction

| Operation | Forward tangent | Reverse cotangent |
|---|---|---|
| $Y=X^T$ | $\dot Y=\dot X^T$ | $\bar X=\bar Y^T$ |
| Permute axes | Apply the same permutation | Apply the inverse permutation |
| Reshape without changing entry correspondence | Reshape the tangent identically | Reshape back to the input shape |
| Sum along an axis | Sum the tangent along that axis | Broadcast the cotangent along the reduced axis |
| Mean over $k$ entries | Mean of their tangents | Broadcast the cotangent and divide by $k$ |
| Broadcast to a larger shape | Broadcast the tangent | Sum over axes introduced or expanded by broadcasting |

For $y_i=\sum_jX_{ij}$,

$$
\dot y_i=\sum_j\dot X_{ij},\qquad
\bar X_{ij}=\bar y_i\quad\text{for every }j.
$$

For $Y_{ij}=X_{ij}+\mathbf1_i c_j$, where $\mathbf1_i=1$ and the bias is shared across rows,

$$
\bar X_{ij}=\bar Y_{ij},\qquad
\bar c_j=\sum_i\bar Y_{ij}.
$$

Reduction and broadcasting are adjoint operations. A reduction in the forward computation is a broadcast in reverse; a broadcast forward is a reduction in reverse.

#### Batched multiplication and shared parameters

For each fixed batch member $b$,

$$
Y^{(b)}=A^{(b)}B^{(b)},
$$

the matrix-product rules apply independently. If the same matrix $W$ is shared instead,

$$
Y^{(b)}=X^{(b)}W,
$$

then

$$
\bar X^{(b)}=\bar Y^{(b)}W^T,\qquad
\boxed{\bar W=\sum_b(X^{(b)})^T\bar Y^{(b)}.}
$$

The batch sum is required because all batch members depend on the same parameter entries. Weight tying, recurrent reuse, and convolution kernels follow this same accumulation principle.

For a gather operation $y_i=x_{s_i}$ with fixed integer indices $s_i$,

$$
\bar x_j=\sum_i\mathbf1_{\{s_i=j\}}\bar y_i.
$$

Repeated gathered indices accumulate their contributions. The formula differentiates the gathered values, not the discrete index choices.

### D.26 Worked example: indexed least squares, forward and backward

Let

$$
X\in\mathbb R^{n\times d},\quad
W\in\mathbb R^{d\times p},\quad
c\in\mathbb R^p,\quad
T\in\mathbb R^{n\times p},
$$

with $n>0$. Define residuals and a mean quadratic loss:

$$
R_{ia}=X_{ij}W_{ja}+\mathbf1_i c_a-T_{ia},\qquad
L=\frac1{2n}R_{ia}R_{ia}.
$$

Here $\mathbf1\in\mathbb R^n$ is the all-ones vector, making the bias broadcast explicit. In the residual expression, $i,a$ are free and $j$ is summed. In the loss, both $i$ and $a$ are summed.

#### Full differential

$$
dR=(dX)W+X(dW)+\mathbf1(dc)^T-dT,
$$

$$
dL=\frac1n R_{ia}\,dR_{ia}.
$$

Constant inputs simply have zero perturbation. The derivative tensor with respect to $W$ has shape $(n,p,d,p)$:

$$
\frac{\partial R_{ia}}{\partial W_{jb}}
=X_{ij}\delta_{ab}.
$$

This explicitly separates the residual's output feature axis $a$ from the parameter's output feature axis $b$.

#### Forward mode for a parameter direction

Hold $X,c,T$ fixed and seed $\dot W=U$. Then

$$
\dot R=XU,\qquad
\boxed{\dot L=\frac1nR_{ia}X_{ij}U_{ja}.}
$$

This is one directional derivative of the loss. A single arbitrary $U$ does not recover every entry of $\nabla_WL$.

#### Reverse mode from the scalar loss

Seed $\bar L=1$. First,

$$
\bar R=R/n.
$$

The product, broadcast, and subtraction rules give

$$
\boxed{\nabla_WL=\frac1nX^TR,\qquad
\nabla_XL=\frac1nRW^T,}
$$

$$
\boxed{\nabla_cL=\frac1nR^T\mathbf1,\qquad
\nabla_TL=-R/n.}
$$

The target derivative is relevant only if $T$ is treated as a differentiable variable. In components,

$$
\frac{\partial L}{\partial W_{ja}}
=\frac1nX_{ij}R_{ia},\qquad
\frac{\partial L}{\partial c_a}
=\frac1n\sum_iR_{ia}.
$$

The forward/reverse consistency check is

$$
\dot L=\langle\nabla_WL,U\rangle_F.
$$

With $X,c,T$ fixed, the Hessian action on $U$ is

$$
\boxed{H_W[U]=\frac1nX^TXU.}
$$

It has the same shape as $W$ and can be evaluated without constructing a $(d,p,d,p)$ Hessian array.

### D.27 Higher derivatives and mixed-mode automatic differentiation

#### Second derivative tensors

For tensor-valued $Y=F(X)$,

$$
\mathcal T_{I,J,K}
=\frac{\partial^2Y_I}{\partial X_J\partial X_K},
$$

with shape

$$
\operatorname{shape}(Y)+\operatorname{shape}(X)+\operatorname{shape}(X).
$$

Its bilinear action is

$$
D^2F(X)[U,V]_I=\mathcal T_{I,J,K}U_JV_K.
$$

For scalar $L$ and matrix input $X$, the Hessian has four axes:

$$
\mathcal H_{ij,kl}
=\frac{\partial^2L}{\partial X_{ij}\partial X_{kl}},\qquad
H[U]_{ij}=\mathcal H_{ij,kl}U_{kl}.
$$

If $L\in C^2$, exchanging the two **input-index blocks** leaves the Hessian unchanged:

$$
\mathcal H_{ij,kl}=\mathcal H_{kl,ij}.
$$

This does not say $\mathcal H_{ij,kl}=\mathcal H_{ji,kl}$: exchanging the two coordinates inside a matrix index is a different operation. Derivative symmetry also does not imply that the input matrix itself is symmetric.

#### Forward-over-forward: contract two input blocks, retain the output

For fixed tangents $U,V$, differentiate one JVP along the other direction:

$$
\boxed{
D^2F(X)[U,V]
=\left.\frac d{dt}\big(DF(X+tU)[V]\big)\right|_{t=0}.
}
$$

This nested forward construction retains every output axis and contracts both derivative-input blocks. For a smooth scalar $f$, the result is the bilinear quantity $u^TH_fv$; for tensor-valued $F$, it has the same shape as $F(X)$. As with the mixed constructions below, the direction seeds remain fixed.

#### Forward-over-reverse: differentiate the gradient in a direction

For $f:\mathbb R^N\to\mathbb R$, compute $g(x)=\nabla f(x)$ using reverse mode, then take a JVP of $g$:

$$
\boxed{\operatorname{JVP}(\nabla f,x,v)=H_f(x)v.}
$$

This is forward-over-reverse AD. It obtains a Hessian-vector product, or HVP, without materializing the $N\times N$ Hessian.

#### Reverse-over-forward: differentiate a directional derivative

For a fixed $v$, first compute

$$
s(x)=Df(x)[v]=\nabla f(x)^Tv.
$$

Then reverse-differentiate this scalar:

$$
\boxed{\nabla s(x)=H_f(x)^Tv=H_f(x)v\quad(f\in C^2).}
$$

The equality to $Hv$ uses Hessian symmetry. Outside classical smooth settings, nested AD conventions may not correspond to a unique symmetric classical Hessian.

#### Reverse-over-reverse: differentiate a gradient contraction

Alternatively, obtain $g=\nabla f$ by reverse mode while keeping its derivative computation differentiable, form $s=g^Tv$, then reverse-differentiate $s$:

$$
\nabla_x\big(\nabla f(x)^Tv\big)=H_f(x)^Tv.
$$

Mathematically this gives the same smooth HVP. Computationally it nests two reverse operations and can have different intermediate-storage and primitive-support requirements.

#### Fixed directions are essential

All formulas above treat $v$ as independent of $x$. If $v=v(x)$,

$$
\boxed{
\nabla_x\big(\nabla f(x)^Tv(x)\big)
=H_f(x)^Tv(x)+J_v(x)^T\nabla f(x).
}
$$

The extra term is a product-rule contribution. Keep an externally chosen HVP direction fixed, but do not detach genuine dependencies inside $f$ or its gradient computation.

#### A composed loss needs both second-order terms

For $h(x)=\ell(F(x))$, with sufficiently smooth $F:\mathbb R^N\to\mathbb R^M$,

$$
\boxed{
H_h=J_F^TH_\ell J_F+
\sum_{a=1}^M\frac{\partial\ell}{\partial F_a}H_{F_a}.
}
$$

The actual upstream loss gradient $\nabla\ell(F(x))$ depends on $x$. Treating it as fixed during the entire second derivative would omit $J_F^TH_\ell J_F$. Fixed external seeds and loss-dependent intermediate cotangents must be distinguished.

For fixed $u\in\mathbb R^M$, the scalarization $u^TF(x)$ has Hessian $\sum_a u_aH_{F_a}$. Its HVP is a contracted second derivative, not the entire vector-output second-derivative tensor.

#### Framework-independent pseudocode

```text
# grad: reverse gradient of a scalar-valued function
# jvp: returns (primal output, directional output derivative)
# vjp: returns (primal output, a pullback accepting an output cotangent)

Y, dY = jvp(F, X, V)
Y, pullback = vjp(F, X)
barX = pullback(U)

g = grad(f)
Hv_forward_over_reverse = jvp(g, X, V).tangent
Hv_reverse_over_forward = grad(lambda Z: jvp(f, Z, V).tangent)(X)
Hv_reverse_over_reverse = grad(lambda Z: inner(g(Z), V))(X)
```

Here `V` is a fixed array of input shape, `U` has output shape, and `inner` is the Euclidean/Frobenius inner product. These are mathematical API sketches, not a claim that every framework uses identical signatures or supports every nesting for every primitive.

### D.28 Softmax and attention as tensor differentiation examples

In this section, component sums are written explicitly; repeated free component labels are not silently summed.

#### Blockwise normalization with a tensor-valued observable

Separate a tensor's axes into a retained block $\beta$ and a normalization block $r$. Each block may itself contain several axes. Define

$$
P_{\beta r}
=\frac{\exp(A_{\beta r})}{\sum_t\exp(A_{\beta t})},
$$

where $t$ ranges over all coordinates of the normalization block. Use distinct labels $(\gamma,s)$ for the input entry being differentiated. The full derivative is

$$
\boxed{
\frac{\partial P_{\beta r}}{\partial A_{\gamma s}}
=\delta_{\beta\gamma}P_{\beta r}
\left(\delta_{rs}-P_{\beta s}\right).
}
$$

Each block delta is a product of coordinate deltas, for example $\delta_{\beta\gamma}=\prod_k\delta_{\beta_k\gamma_k}$. The factor $\delta_{\beta\gamma}$ expresses independence between retained blocks; the normalization couples all coordinates within $r$.

Now let a downstream observable be a tensor $O_\alpha=G_\alpha(P)$, and define its upstream derivative tensor

$$
\mathcal B_{\alpha,\beta r}
=\frac{\partial O_\alpha}{\partial P_{\beta r}}.
$$

Without reducing the observable block $\alpha$, the chain rule gives

$$
\frac{\partial O_\alpha}{\partial A_{\gamma s}}
=\sum_{\beta,r}\mathcal B_{\alpha,\beta r}
 \frac{\partial P_{\beta r}}{\partial A_{\gamma s}}.
$$

Contracting the deltas yields

$$
\boxed{
\frac{\partial O_\alpha}{\partial A_{\gamma s}}
=P_{\gamma s}\left[
\mathcal B_{\alpha,\gamma s}
-\sum_r\mathcal B_{\alpha,\gamma r}P_{\gamma r}
\right].
}
$$

The output block $\alpha$ and input blocks $(\gamma,s)$ remain free. This is the full derivative propagation rule for an arbitrary tensor observable. A scalar objective is the case with no $\alpha$ axes; a single VJP is obtained by contracting $\alpha$ against a fixed seed. The vector and attention formulas below are specializations of this index-block identity.

#### Softmax: full Jacobian versus its actions

For $p_i=e^{z_i}/\sum_ke^{z_k}$,

$$
\frac{\partial p_i}{\partial z_j}
=p_i(\delta_{ij}-p_j),\qquad
J=\operatorname{diag}(p)-pp^T.
$$

The JVP is

$$
\boxed{\dot p=p\odot\big(\dot z-(p^T\dot z)\mathbf1\big),}
$$

and the VJP is

$$
\boxed{\bar z=p\odot\big(\bar p-(p^T\bar p)\mathbf1\big).}
$$

Neither requires constructing $J$. Their similar form results from the symmetry of this particular Jacobian; arbitrary Jacobians are not symmetric. As a useful check, $\mathbf1^T\dot p=0$ because softmax probabilities retain unit sum, and $\mathbf1^T\bar z=0$ because a shared logit shift leaves the probabilities unchanged.

#### Scaled dot-product attention: primal computation

Let

$$
Q\in\mathbb R^{n_q\times d},\quad
K\in\mathbb R^{n_k\times d},\quad
V\in\mathbb R^{n_k\times d_v}.
$$

For a fixed additive bias or mask $M$, define

$$
S=\frac{QK^T}{\sqrt d}+M,\qquad
P=\operatorname{softmax}_{\mathrm{row}}(S),\qquad
O=PV.
$$

Thus $S,P\in\mathbb R^{n_q\times n_k}$ and $O\in\mathbb R^{n_q\times d_v}$. For exact masking, interpret each row's softmax as normalization over its allowed keys; excluded entries have zero probability and zero logit derivative. Every row must have at least one allowed key.

#### Attention JVP

For perturbations $\dot Q,\dot K,\dot V$ and fixed $M$,

$$
\dot S=\frac{\dot QK^T+Q\dot K^T}{\sqrt d},
$$

$$
\dot P_{ij}=P_{ij}\left(\dot S_{ij}-\sum_kP_{ik}\dot S_{ik}\right),
$$

$$
\boxed{\dot O=\dot P V+P\dot V.}
$$

If the additive bias is also perturbed, include $\dot M$ in $\dot S$.

#### Attention VJP

Given $G=\bar O$ from the downstream scalar loss,

$$
\bar V=P^TG,\qquad \bar P=GV^T.
$$

Apply rowwise softmax reverse differentiation:

$$
t_i=\sum_kP_{ik}\bar P_{ik},\qquad
\bar S_{ij}=P_{ij}(\bar P_{ij}-t_i).
$$

Then

$$
\boxed{
\bar Q=\frac{\bar S K}{\sqrt d},\qquad
\bar K=\frac{\bar S^TQ}{\sqrt d},\qquad
\bar V=P^TG.
}
$$

If a finite additive bias $M$ is trainable, $\bar M=\bar S$, followed by reduction over any broadcast axes. A fixed mask receives no parameter gradient.

If self-attention uses $Q=XW_Q$, $K=XW_K$, and $V=XW_V$, the shared input receives all three paths:

$$
\boxed{\bar X=\bar QW_Q^T+\bar KW_K^T+\bar VW_V^T.}
$$

Parameter gradients are $\bar W_Q=X^T\bar Q$, and similarly for $W_K,W_V$. Batch and head axes carry the same contractions independently; any parameters shared across them require summed contributions. These identities describe the attention operation itself, before extra components such as dropout, normalization, or residual paths, whose own derivative rules must also be included.

### D.29 Choosing a differentiation mode and checking the result

Let $N$ be the number of scalar input entries and $M$ the number of scalar output entries.

| Quantity required | Natural construction | Direction count |
|---|---|---|
| One directional output derivative | Forward JVP | One input direction |
| Gradient of one scalar objective | Reverse VJP seeded by $1$ | One output seed |
| One weighted output sensitivity | Reverse VJP with fixed $U$ | One output cotangent |
| Full $M\times N$ Jacobian by forward mode | JVPs on an input basis | $N$ input directions |
| Full Jacobian by reverse mode | VJPs on an output basis | $M$ output directions |
| One Hessian-vector product | A suitable nested AD construction | One fixed input direction |
| Full scalar Hessian | HVPs on an input basis, or a suitable Hessian transform | $N$ input directions and $N^2$ output entries |

Directions can be batched or processed in chunks; the table counts directions, not necessarily separate API calls. For a full Jacobian, relatively few inputs often favor forward mode and relatively few outputs often favor reverse mode. A scalar loss with many parameters is the characteristic reverse-mode case.

#### Work and memory are properties of the computation

A JVP or VJP often costs a small multiple of a primal evaluation, but the constants depend on the operations, derivative implementation, and execution strategy. An HVP for supported differentiable primitives can have work proportional to the cost of evaluating the original computation, up to such factors. It is not universally $O(N)$: the primal function itself may cost far more than $O(N)$.

Forward mode need not preserve a complete history for a later reverse sweep. Reverse mode needs relevant forward intermediates, either saved or recomputed. Checkpointing deliberately trades extra computation for reduced saved-intermediate storage. Higher-order nesting can change both costs, and no nesting order is universally the fastest or most memory efficient.

Forming a full Jacobian or Hessian has an unavoidable output-storage cost proportional to its number of entries if stored densely. Prefer a contraction such as JVP, VJP, or HVP when that is what the downstream calculation actually uses.

#### Five practical checks

1. **Free-index check:** every output index remains free, and only intended contraction indices are summed. Keep batch labels distinct from contraction labels.
2. **Shape check:** JVP output has output shape; VJP output has input shape; a scalar gradient has parameter shape.
3. **Adjoint check:** for chosen test arrays $U,V$, verify $\langle U,DF[X][V]\rangle_F=\langle DF[X]^*[U],V\rangle_F$. This catches transpose and missing-reduction errors.
4. **Sharing check:** add contributions from every use, including broadcast axes, tied parameters, repeated gathers, and residual branches.
5. **Smoothness and seed check:** hold external direction seeds fixed, preserve actual objective dependence, and identify kinks or discrete decisions.

At a smooth point, a numerical directional check can additionally compare $DF(X)[V]$ with $[F(X+hV)-F(X-hV)]/(2h)$. This uses finite differences to check AD, not to define it; truncation and roundoff mean the discrepancy is not expected to vanish for arbitrarily tiny $h$.

At ties in `max`, at ReLU's kink, or at discrete operations such as `argmax`, an ordinary derivative may be absent. A framework's chosen convention, zero gradient, subgradient, or custom surrogate should not be presented as a unique classical derivative. Data-dependent branching differentiates the executed branch where its local mathematical derivative is meaningful; it does not automatically differentiate a change of discrete control flow.

## Multivariable vector and matrix calculus

- [M.1 Objects, dimensions, and the central correspondences](#m1-objects-dimensions-and-the-central-correspondences)
- [M.2 Partial derivatives, total derivatives, and differentiability](#m2-partial-derivatives-total-derivatives-and-differentiability)
- [M.3 Multivariable chain rules](#m3-multivariable-chain-rules)
- [M.4 Taylor expansions, local approximation, and error](#m4-taylor-expansions-local-approximation-and-error)
- [M.5 Implicit and inverse functions](#m5-implicit-and-inverse-functions)
- [M.6 Multivariable optimization](#m6-multivariable-optimization)
- [M.7 Double and triple integrals](#m7-double-and-triple-integrals)
- [M.8 Changes of variables and Jacobians](#m8-changes-of-variables-and-jacobians)
- [M.9 Line integrals, circulation, and planar flux](#m9-line-integrals-circulation-and-planar-flux)
- [M.10 Surface integrals and flux](#m10-surface-integrals-and-flux)
- [M.11 Gradient, divergence, curl, and Laplacian](#m11-gradient-divergence-curl-and-laplacian)
- [M.12 The major integral theorems](#m12-the-major-integral-theorems)
- [M.13 Integration by parts in several variables](#m13-integration-by-parts-in-several-variables)
- [M.14 Matrix differential calculus](#m14-matrix-differential-calculus)
- [M.15 Useful derivatives for probabilities and modern optimization](#m15-useful-derivatives-for-probabilities-and-modern-optimization)
- [M.16 Final error checklist](#m16-final-error-checklist)

### M.1 Objects, dimensions, and the central correspondences

Let $f:\mathbb R^n\to\mathbb R$, $F:\mathbb R^n\to\mathbb R^m$, and $x=(x_1,\ldots,x_n)^T$.

| Object | Definition or shape | What it does |
|---|---|---|
| Gradient $\nabla f$ | $n\times1$, entries $\partial f/\partial x_i$ | Collects first derivatives of a scalar function |
| Jacobian $J_F$ | $m\times n$, entry $(i,j)=\partial F_i/\partial x_j$ | Maps a small input change to a first-order output change |
| Hessian $H_f$ | $n\times n$, entry $(i,j)=\partial^2 f/(\partial x_i\partial x_j)$ | Describes second-order variation |
| Differential $df$ | $\nabla f^Tdx$ | A scalar linear function of a displacement |
| Differential $dF$ | $J_Fdx$ | The linearization of a vector-valued function |
| Directional derivative $D_vf$ | $\nabla f^Tv$ when $f$ is differentiable | Rate of change along $v$ |

The useful one-variable correspondences are:

| One variable | Several variables |
|---|---|
| $f'(x)$ | $\nabla f$ for scalar output; $J_F$ for vector output |
| $f''(x)$ | $H_f$ |
| $f'(x)\,dx$ | $\nabla f^Tdx$ |
| $(f\circ g)'=f'(g)g'$ | $J_{F\circ G}=J_F(G)J_G$ |
| $du=g'(x)\,dx$ | $dx=\lvert\det J_T(u)\rvert\,du$ in a change of variables |
| Integration by parts | Divergence identities and boundary integrals |
| $\int_a^b f'=f(b)-f(a)$ | Gradient theorem, Green, Stokes, and divergence theorem |

**Shape check:** $df$ is a scalar, $J_Fdx$ is an $m$-vector, and $dx^TH_fdx$ is a scalar. Checking dimensions catches many chain-rule and matrix-gradient errors.

### M.2 Partial derivatives, total derivatives, and differentiability

#### Partial derivative

Hold the other variables fixed:

$$
\frac{\partial f}{\partial x_i}(x)
=\lim_{h\to0}\frac{f(x+he_i)-f(x)}h.
$$

For $f(x,y)=x^2y+\sin(xy)$,

$$
f_x=2xy+y\cos(xy),\qquad f_y=x^2+x\cos(xy).
$$

For an expression such as $f(x,y(x))$, $\partial f/\partial x$ and $df/dx$ are different:

$$
\frac d{dx}f(x,y(x))=f_x+f_y\frac{dy}{dx}.
$$

The partial derivative ignores the change in $y$; the total derivative includes it.

#### Differentiability means a single linear approximation

$F$ is differentiable at $x$ if there is a linear map $A$ such that

$$
F(x+h)=F(x)+Ah+o(\|h\|).
$$

Then $A=J_F(x)$. Continuous partial derivatives in a neighborhood are a sufficient condition. Merely having every partial derivative at the point is insufficient. Even having every directional derivative is insufficient if those derivatives do not arise from one linear map.

For example, define

$$
f(x,y)=\begin{cases}
\dfrac{xy^2}{x^2+y^2},&(x,y)\ne(0,0),\\
0,&(x,y)=(0,0).
\end{cases}
$$

At the origin both partial derivatives are zero, while for $v=(a,b)\ne0$,

$$
D_vf(0,0)=\frac{ab^2}{a^2+b^2}.
$$

All these directional derivatives exist, but their dependence on $v$ is not linear. The function is not differentiable at the origin.

#### Gradient and directional derivatives

For differentiable $f$,

$$
D_vf(x)=\left.\frac d{dt}f(x+tv)\right|_{t=0}=\nabla f(x)^Tv.
$$

If $\|v\|=1$, the maximum directional derivative is $\|\nabla f\|$, attained in the gradient direction when the gradient is nonzero. The minimum is $-\|\nabla f\|$. Without the unit-length restriction, the derivative also scales with the speed $\|v\|$.

The gradient is perpendicular to a regular level surface $f(x)=c$. A tangent displacement $v$ satisfies $\nabla f^Tv=0$. At $\nabla f=0$, the usual normal-direction interpretation can fail.

#### Mixed partial derivatives

If the second partial derivatives are continuous near a point, then

$$
f_{x_ix_j}=f_{x_jx_i},\qquad H_f=H_f^T.
$$

Do not interchange mixed partials without checking an appropriate regularity condition.

#### Euler's theorem for homogeneous functions

A differentiable function is homogeneous of degree $k$ if

$$
f(tx)=t^kf(x)\qquad(t>0)
$$

on a domain closed under the relevant positive scalings. Differentiating with respect to $t$ and setting $t=1$ gives

$$
\boxed{x^T\nabla f(x)=k f(x).}
$$

If $f$ is twice differentiable, differentiating this identity with respect to $x$ gives

$$
H_f(x)x=(k-1)\nabla f(x),\qquad
x^TH_f(x)x=k(k-1)f(x).
$$

Example: $f(x,y)=x^2+xy+y^2$ has degree $2$, so $xf_x+yf_y=2f$. This is an effective algebraic check on derivatives of homogeneous expressions. The scaling is about the origin; a translated quadratic need not be homogeneous.

### M.3 Multivariable chain rules

#### First-order chain rule

For $G:\mathbb R^n\to\mathbb R^m$ and $F:\mathbb R^m\to\mathbb R^p$,

$$
\boxed{J_{F\circ G}(x)=J_F(G(x))J_G(x).}
$$

For scalar outer $f$,

$$
\boxed{\nabla_x(f\circ G)=J_G^T\nabla_yf\big|_{y=G(x)}.}
$$

For $x=x(t)$,

$$
\frac d{dt}f(x(t))=\nabla f(x(t))^Tx'(t).
$$

If $f=f(t,x(t))$ depends explicitly on time as well,

$$
\frac{df}{dt}=\frac{\partial f}{\partial t}+\nabla_xf^Tx'(t).
$$

#### Second-order chain rule

For scalar $f:\mathbb R^m\to\mathbb R$ and $G:\mathbb R^n\to\mathbb R^m$,

$$
\boxed{
H_{f\circ G}
=J_G^TH_fJ_G+\sum_{k=1}^m f_{y_k}H_{G_k}.
}
$$

Evaluate $H_f$ and $f_{y_k}$ at $G(x)$. The second term disappears for an affine $G$; it generally does not disappear for a nonlinear $G$.

Along a curve,

$$
\frac{d^2}{dt^2}f(x(t))
=x'(t)^TH_fx'(t)+\nabla f^Tx''(t).
$$

Along a straight line $x+tv$,

$$
\frac{d^2}{dt^2}f(x+tv)=v^TH_f(x+tv)v.
$$

#### Example: the extra Hessian term

Take $f(u)=u^2$ and $G(x,y)=x^2+y$. Then $h=(x^2+y)^2$,

$$
\nabla G=\begin{pmatrix}2x\\1\end{pmatrix},\qquad
H_G=\begin{pmatrix}2&0\\0&0\end{pmatrix}.
$$

The formula gives

$$
H_h=2\nabla G\nabla G^T+2G H_G
=\begin{pmatrix}12x^2+4y&4x\\4x&2\end{pmatrix}.
$$

Using only the first term would miss $4(x^2+y)$ in the upper-left entry.

### M.4 Taylor expansions, local approximation, and error

For $f\in C^2$ near $x$,

$$
\boxed{
f(x+h)=f(x)+\nabla f(x)^Th+\frac12h^TH_f(x)h+o(\|h\|^2).
}
$$

For two variables, the quadratic term is

$$
\frac12\left(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2\right).
$$

For a $C^3$ function on a neighborhood of the segment from $x$ to $x+h$, the remainder after the quadratic term can be written

$$
R_2=\frac16D^3f(x+\theta h)[h,h,h],\qquad 0<\theta<1.
$$

If the operator norm of $H_f$ is at most $M$ along that segment, the linearization error satisfies

$$
\left|f(x+h)-f(x)-\nabla f(x)^Th\right|\le\frac M2\|h\|^2.
$$

The integral forms are particularly useful:

$$
f(x+h)-f(x)=\int_0^1\nabla f(x+th)^Th\,dt,
$$

$$
f(x+h)=f(x)+\nabla f(x)^Th+
\int_0^1(1-t)h^TH_f(x+th)h\,dt.
$$

For scalar $f$, a segment version of the mean value theorem gives some $\theta\in(0,1)$ with $f(x+h)-f(x)=\nabla f(x+\theta h)^Th$. For vector-valued $F$, a single common $\theta$ generally does not work for every component; the integral formula remains valid componentwise.

### M.5 Implicit and inverse functions

#### Implicit function theorem

Let $F:\mathbb R^n\times\mathbb R^m\to\mathbb R^m$ be $C^1$, with

$$
F(x_0,y_0)=0,\qquad \det D_yF(x_0,y_0)\ne0.
$$

Locally, the equation defines a unique $C^1$ function $y=g(x)$, and

$$
\boxed{J_g=-(D_yF)^{-1}D_xF.}
$$

This is a local theorem: invertibility at one point does not establish a global, single-valued solution.

For a scalar constraint $F(x,y)=0$ with $F_y\ne0$,

$$
y'=-\frac{F_x}{F_y},\qquad
y''=-\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}.
$$

For a level surface $F(x,y,z)=0$ with $F_z\ne0$,

$$
z_x=-\frac{F_x}{F_z},\qquad z_y=-\frac{F_y}{F_z}.
$$

**Example:** $x^2+xy+y^2=3$ passes through $(1,1)$. At this point,

$$
y'=-\frac{2x+y}{x+2y}=-1,\qquad
y''=-\frac{2+2(-1)+2(-1)^2}{3}=-\frac23.
$$

#### Inverse function theorem

If $F:\mathbb R^n\to\mathbb R^n$ is $C^1$ near $x_0$ and $\det J_F(x_0)\ne0$, it has a differentiable local inverse. At $y=F(x)$,

$$
\boxed{J_{F^{-1}}(y)=[J_F(x)]^{-1}.}
$$

A nonzero determinant everywhere is still not, by itself, a general guarantee of global injectivity.

### M.6 Multivariable optimization

#### Interior unconstrained extrema

For a differentiable function, an interior local extremum must satisfy $\nabla f=0$. Such points are **stationary points**, not automatically maxima or minima.

At a stationary point of a $C^2$ function:

| Hessian | Conclusion |
|---|---|
| Positive definite | Strict local minimum |
| Negative definite | Strict local maximum |
| Indefinite | Saddle point |
| Positive or negative semidefinite | Inconclusive in general |
| Zero matrix | Inconclusive |

Positive definiteness means $v^TH_fv>0$ for every nonzero $v$. For symmetric $H_f$, all eigenvalues must be positive. Sylvester's criterion equivalently requires all **leading principal minors** to be positive. For negative definiteness, these leading principal minors alternate signs, beginning negative.

For two variables, define $\Delta=f_{xx}f_{yy}-f_{xy}^2$ at a stationary point:

| Condition | Classification |
|---|---|
| $\Delta>0$, $f_{xx}>0$ | Strict local minimum |
| $\Delta>0$, $f_{xx}<0$ | Strict local maximum |
| $\Delta<0$ | Saddle |
| $\Delta=0$ | Inconclusive |

A continuous function on a compact feasible set attains its maximum and minimum. To find them, compare interior candidates with candidates on every relevant boundary piece, including corners and singular boundary points.

#### Convexity

On an open convex domain, a $C^2$ function is convex if and only if $H_f(x)$ is positive semidefinite everywhere. A stationary point of a differentiable convex function is a global minimum. Strict convexity makes a minimizer unique, if it exists. Positive definite Hessians everywhere are sufficient for strict convexity but not necessary.

#### Newton and Gauss–Newton equations

Newton's step for a stationary point solves

$$
H_f(x_k)s_k=-\nabla f(x_k),\qquad x_{k+1}=x_k+s_k.
$$

This follows by setting the gradient of the local quadratic Taylor approximation to zero. An invertible Hessian makes the linear system solvable, but an indefinite Hessian need not give a descent direction. Local convergence statements require further assumptions; damping, line searches, or trust regions address different global and conditioning concerns.

For nonlinear least squares $f(x)=\tfrac12\|r(x)\|^2$,

$$
\nabla f=J_r^Tr,\qquad
H_f=J_r^TJ_r+\sum_i r_iH_{r_i}.
$$

Gauss–Newton uses $J_r^TJ_r$ as an approximation to the Hessian and solves

$$
J_r^TJ_rs=-J_r^Tr.
$$

The omitted term vanishes at a zero-residual point and for affine residuals. It is not generally zero merely because the objective is a sum of squares. A damped system adds $\lambda I$ to the left-hand matrix; solving a linear system is preferable to explicitly constructing an inverse.

#### Equality constraints: Lagrange multipliers

Minimize $f(x)$ subject to $g(x)=0$, where $g:\mathbb R^n\to\mathbb R^m$. Define

$$
\mathcal L(x,\lambda)=f(x)+\lambda^Tg(x).
$$

When $J_g$ has full row rank at a constrained local extremum,

$$
\nabla_x\mathcal L=0,\qquad g(x)=0.
$$

Geometrically, $\nabla f$ lies in the span of the constraint normals. The feasible tangent space is

$$
T=\{v:J_gv=0\}.
$$

For a regular equality-constrained candidate, assess $H_{xx}\mathcal L$ on this tangent space, not on all of $\mathbb R^n$. If $Z$ has columns forming a basis of $T$, use

$$
Z^TH_{xx}\mathcal L Z.
$$

Positive definiteness gives a strict constrained local minimum; positive semidefiniteness is necessary at a constrained local minimum under the usual $C^2$ regularity assumptions. The bordered Hessian is

$$
B=\begin{pmatrix}0&J_g\\J_g^T&H_{xx}\mathcal L\end{pmatrix}.
$$

Its determinant tests depend on the number of constraints and the sign convention. The tangent-space test is usually easier to apply correctly.

**Example:** Minimize $x^2+y^2$ subject to $x+y=1$. Stationarity gives $2x+\lambda=2y+\lambda=0$, so $x=y=1/2$. The minimum is $1/2$. A tangent vector is $(t,-t)$, and its quadratic form is $4t^2>0$ for $t\ne0$.

#### Inequality constraints: KKT conditions

For

$$
\min_x f(x),\qquad g_i(x)\le0,\quad h_j(x)=0,
$$

use

$$
\mathcal L=f+\sum_i\lambda_i g_i+\sum_j\nu_jh_j.
$$

The Karush–Kuhn–Tucker conditions are:

1. **Stationarity:** $\nabla_x\mathcal L=0$.
2. **Primal feasibility:** $g_i\le0$, $h_j=0$.
3. **Dual feasibility:** $\lambda_i\ge0$.
4. **Complementary slackness:** $\lambda_i g_i=0$ for every $i$.

They are necessary at local minima only under an appropriate constraint qualification, such as linear independence of the active constraint gradients. If $f$ and all $g_i$ are convex and all $h_j$ are affine, a feasible KKT point is globally optimal. Slater's condition is a standard condition ensuring necessity and strong duality in the convex setting. Changing constraints from $g_i\le0$ to $g_i\ge0$ changes the multiplier-sign convention.

#### Envelope theorem: differentiating an optimized value

Suppose $V(\theta)=f(x_*(\theta),\theta)$, where $x_*(\theta)$ is a differentiable branch of interior stationary optimizers and the relevant derivatives exist. The chain rule gives

$$
\frac{dV}{d\theta}
=f_x^T\frac{dx_*}{d\theta}+f_\theta
=f_\theta(x_*(\theta),\theta).
$$

The optimizer's derivative drops out because $f_x=0$ at the optimum. For regular equality-constrained problems, with $\mathcal L=f+\lambda^Tg$, the corresponding formula is

$$
\frac{dV}{d\theta}
=\partial_\theta\mathcal L(x_*,\lambda_*,\theta).
$$

This assumes a suitable smooth optimizer/multiplier branch. Nonunique optimizers, changes of active constraints, or nonsmooth optimal-value functions require more careful directional or generalized statements. It is not permission to discard arbitrary intermediate derivatives in a computation graph.

### M.7 Double and triple integrals

#### Definitions and iterated integrals

For a region $D\subset\mathbb R^2$,

$$
\iint_Df(x,y)\,dA
$$

accumulates a scalar density over area. For a region $\Omega\subset\mathbb R^3$,

$$
\iiint_\Omega f(x,y,z)\,dV
$$

does the same over volume.

For a vertically simple region,

$$
D=\{(x,y):a\le x\le b,\ g_1(x)\le y\le g_2(x)\},
$$

$$
\iint_D f\,dA=\int_a^b\int_{g_1(x)}^{g_2(x)}f(x,y)\,dy\,dx.
$$

Integrate inside first, treating the outer variable as constant. To reverse order, describe the **same geometric region** using the new slices; swapping differential symbols without changing the limits is invalid.

#### When exchanging integration order is valid

- **Tonelli:** For a measurable nonnegative function, iterated integrals agree with the product-space integral, allowing $+\infty$.
- **Fubini:** If $\int\lvert f\rvert<\infty$, integration order may be exchanged, with the iterated expressions understood almost everywhere where needed.
- A continuous function on a compact rectangle satisfies the usual elementary hypotheses automatically.
- For signed improper integrals without absolute integrability, order changes may alter the result or fail entirely.

#### Example: reversing order makes the integral elementary

$$
I=\int_0^1\int_x^1e^{y^2}\,dy\,dx.
$$

The region is $0\le x\le y\le1$, so

$$
I=\int_0^1\int_0^ye^{y^2}\,dx\,dy
=\int_0^1ye^{y^2}\,dy=\frac{e-1}{2}.
$$

The original inner antiderivative is non-elementary; the reversed integral is straightforward.

### M.8 Changes of variables and Jacobians

For a sufficiently regular, one-to-one transformation $x=T(u)$ between $n$-dimensional regions, with nonsingular Jacobian in their interiors,

$$
\boxed{
\int_{T(U)}f(x)\,dx
=\int_Uf(T(u))\left|\det J_T(u)\right|\,du.
}
$$

The absolute determinant measures volume scaling. Orientation does not change an ordinary volume integral. Singularities on negligible boundary sets, such as the origin in polar coordinates, can be handled by the usual limiting or measure-theoretic interpretation. If the map covers the image several times, account for multiplicity.

| Coordinates | Transformation | Measure |
|---|---|---|
| Polar | $x=r\cos\theta$, $y=r\sin\theta$ | $dA=r\,dr\,d\theta$ |
| Cylindrical | $x=r\cos\theta$, $y=r\sin\theta$, $z=z$ | $dV=r\,dr\,d\theta\,dz$ |
| Spherical | $x=\rho\sin\phi\cos\theta$, $y=\rho\sin\phi\sin\theta$, $z=\rho\cos\phi$ | $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$ |
| Linear | $x=Au+b$, nonsingular $A$ | $dx=\lvert\det A\rvert\,du$ |

In this spherical convention, $\phi\in[0,\pi]$ is the polar angle from the positive $z$-axis, $\theta$ is azimuth, and $\rho\ge0$. Many books exchange the names $\theta$ and $\phi$; identify the convention before using a formula.

For an ellipsoid $x^2/a^2+y^2/b^2+z^2/c^2\le1$, use $(x,y,z)=(au,bv,cw)$. With $a,b,c>0$, its volume is $abc$ times the unit-ball volume:

$$
V=\frac{4\pi abc}{3}.
$$

#### Mass, averages, and moments

For nonnegative density $\rho$ on $D$ with finite positive mass and finite displayed moments,

$$
m=\iint_D\rho\,dA,\qquad
\bar x=\frac1m\iint_Dx\rho\,dA,\qquad
\bar y=\frac1m\iint_Dy\rho\,dA.
$$

For area $A>0$,

$$
f_{\mathrm{avg}}=\frac1A\iint_Df\,dA.
$$

Moments of inertia for a plane lamina are

$$
I_x=\iint_Dy^2\rho\,dA,\quad
I_y=\iint_Dx^2\rho\,dA,\quad
I_z=I_x+I_y.
$$

Triple-integral versions replace $dA$ by $dV$. About a spatial axis, integrate squared perpendicular distance times density.

### M.9 Line integrals, circulation, and planar flux

Let $C$ have a piecewise smooth parametrization $r(t)$, $a\le t\le b$.

#### Scalar line integral

$$
ds=\|r'(t)\|dt,\qquad
\boxed{\int_Cf\,ds=\int_a^bf(r(t))\|r'(t)\|dt.}
$$

This accumulates density along length and is unchanged when the orientation is reversed.

#### Vector line integral

$$
\boxed{\int_CF\cdot dr=\int_a^bF(r(t))\cdot r'(t)\,dt.}
$$

In three dimensions,

$$
\int_CF\cdot dr=\int_CP\,dx+Q\,dy+R\,dz.
$$

It changes sign under orientation reversal. Work by a force is a vector line integral. Circulation is the corresponding integral around a closed curve.

#### Planar outward flux

For a positively oriented, counterclockwise simple closed boundary $C$ and $F=(P,Q)$,

$$
n\,ds=(dy,-dx),\qquad
\boxed{\oint_CF\cdot n\,ds=\oint_CP\,dy-Q\,dx.}
$$

Using the left normal of a counterclockwise curve would give the inward normal and the opposite sign.

#### Conservative vector fields and exact differentials

If $F=\nabla\phi$ on a domain containing the curve,

$$
\boxed{\int_CF\cdot dr=\phi(r(b))-\phi(r(a)).}
$$

This is the **fundamental theorem for line integrals**. On a connected open domain, having a potential is equivalent to path independence and to zero integral around every piecewise smooth closed loop.

For a $C^1$ field, a potential implies $\nabla\times F=0$. The converse requires a suitable domain, for example a simply connected open domain. In two dimensions the analogous test is $P_y=Q_x$. A hole or singularity can obstruct a global potential.

**Example: a curl-free field with nonzero circulation.** On $\mathbb R^2\setminus\{0\}$,

$$
F(x,y)=\left(-\frac{y}{x^2+y^2},\frac{x}{x^2+y^2}\right)
$$

has $Q_x-P_y=0$, but on the unit circle $r(t)=(\cos t,\sin t)$,

$$
\oint_CF\cdot dr=\int_0^{2\pi}1\,dt=2\pi.
$$

There is no global single-valued potential on this punctured domain.

To find a potential in two variables, integrate $P$ with respect to $x$, add an unknown function $c(y)$, and use $\phi_y=Q$ to determine $c$. In three dimensions, add an unknown function of the other two variables at the first step.

### M.10 Surface integrals and flux

For a regular parametrized surface $r(u,v)$,

$$
\boxed{dS=\|r_u\times r_v\|\,du\,dv.}
$$

Thus

$$
\iint_Sf\,dS
=\iint_Uf(r(u,v))\|r_u\times r_v\|\,du\,dv.
$$

For the orientation corresponding to $r_u\times r_v$,

$$
\boxed{
\iint_SF\cdot n\,dS
=\iint_UF(r(u,v))\cdot(r_u\times r_v)\,du\,dv.
}
$$

Scalar surface integrals are independent of orientation; flux integrals reverse sign with the chosen normal. Avoid multiplying by the surface scale factor twice: $r_u\times r_v$ already combines the unit normal and area scaling.

For a graph $z=g(x,y)$,

$$
dS=\sqrt{1+g_x^2+g_y^2}\,dx\,dy.
$$

The upward-oriented vector area is

$$
n\,dS=(-g_x,-g_y,1)\,dx\,dy.
$$

For an implicit regular surface $F(x,y,z)=0$, a unit normal is

$$
n=\pm\frac{\nabla F}{\|\nabla F\|}.
$$

Choose the sign using the specified orientation. For the sphere of radius $R$, $n=(x,y,z)/R$ is outward.

### M.11 Gradient, divergence, curl, and Laplacian

In Cartesian coordinates, write $F=(P,Q,R)$.

$$
\nabla f=(f_x,f_y,f_z)^T,
$$

$$
\nabla\cdot F=P_x+Q_y+R_z,
$$

$$
\nabla\times F=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y)^T,
$$

$$
\Delta f=\nabla\cdot\nabla f=f_{xx}+f_{yy}+f_{zz}.
$$

| Operator | Input | Output | Interpretation |
|---|---|---|---|
| Gradient | Scalar field | Vector field | Local direction and rate of increase |
| Divergence | Vector field | Scalar field | Local net outward flow per unit volume |
| Curl in $\mathbb R^3$ | Vector field | Vector field | Local circulation density and axis |
| Laplacian | Scalar field | Scalar field | Trace of the Hessian; divergence of the gradient |

For sufficiently smooth fields,

$$
\nabla\times\nabla f=0,\qquad
\nabla\cdot(\nabla\times F)=0,
$$

$$
\nabla\cdot(fF)=\nabla f\cdot F+f\nabla\cdot F,
$$

$$
\nabla\times(fF)=\nabla f\times F+f\nabla\times F,
$$

$$
\Delta(fg)=f\Delta g+2\nabla f\cdot\nabla g+g\Delta f,
$$

$$
\nabla\times(\nabla\times F)=\nabla(\nabla\cdot F)-\Delta F,
$$

where the Cartesian vector Laplacian $\Delta F$ acts componentwise.

#### Orthogonal coordinates

For orthogonal coordinates $(q_1,q_2,q_3)$ with scale factors $h_i=\|\partial r/\partial q_i\|$ and orthonormal coordinate vectors $e_i$,

$$
\nabla f=\sum_{i=1}^3\frac{e_i}{h_i}\frac{\partial f}{\partial q_i},
$$

$$
\nabla\cdot F=\frac1{h_1h_2h_3}
\sum_{i=1}^3\frac{\partial}{\partial q_i}
\left(\frac{h_1h_2h_3}{h_i}F_i\right),
$$

$$
\Delta f=\frac1{h_1h_2h_3}
\sum_{i=1}^3\frac{\partial}{\partial q_i}
\left(\frac{h_1h_2h_3}{h_i^2}\frac{\partial f}{\partial q_i}\right).
$$

Here $F_i=F\cdot e_i$ are components in the local orthonormal basis. Cylindrical scale factors for $(r,\theta,z)$ are $(1,r,1)$; spherical scale factors for $(\rho,\phi,\theta)$ in the convention above are $(1,\rho,\rho\sin\phi)$.

For a right-handed orthonormal coordinate basis, curl can be remembered by the formal determinant

$$
\nabla\times F=\frac1{h_1h_2h_3}
\begin{vmatrix}
h_1e_1&h_2e_2&h_3e_3\\
\partial_{q_1}&\partial_{q_2}&\partial_{q_3}\\
h_1F_1&h_2F_2&h_3F_3
\end{vmatrix}.
$$

Expand along the first row, with each derivative acting on the corresponding third-row product. These are physical components in the orthonormal basis, not the unnormalized coordinate-basis components.

Common scalar Laplacians are

$$
\Delta f=f_{rr}+\frac1rf_r+\frac1{r^2}f_{\theta\theta}
\quad\text{(two-dimensional polar)},
$$

$$
\Delta f=f_{rr}+\frac1rf_r+\frac1{r^2}f_{\theta\theta}+f_{zz}
\quad\text{(cylindrical)},
$$

$$
\Delta f=\frac1{\rho^2}\partial_\rho(\rho^2f_\rho)
+\frac1{\rho^2\sin\phi}\partial_\phi(\sin\phi\,f_\phi)
+\frac1{\rho^2\sin^2\phi}f_{\theta\theta}
\quad\text{(spherical)}.
$$

For a radial function in $\mathbb R^n$, $f(x)=u(r)$ with $r=\|x\|>0$,

$$
\Delta f=u''(r)+\frac{n-1}{r}u'(r).
$$

Coordinate singularities at $r=0$ or the poles require limits or another coordinate chart; division by zero is not permitted.

### M.12 The major integral theorems

Assume the fields are $C^1$ on suitable open neighborhoods, regions have piecewise smooth boundaries, and surfaces carry the stated orientations. If there are field singularities, exclude them and include all resulting boundary pieces before applying a theorem.

#### Green's theorem: circulation form

For a planar region $D$ with positively oriented boundary $\partial D$,

$$
\boxed{
\oint_{\partial D}P\,dx+Q\,dy
=\iint_D(Q_x-P_y)\,dA.
}
$$

Positive orientation keeps the region on the left: outer boundaries run counterclockwise and boundaries around holes run clockwise.

#### Green's theorem: flux form

$$
\boxed{
\oint_{\partial D}P\,dy-Q\,dx
=\iint_D(P_x+Q_y)\,dA.
}
$$

Useful area formulas for positively oriented simple closed curves are

$$
A=\oint_Cx\,dy=-\oint_Cy\,dx
=\frac12\oint_C(x\,dy-y\,dx).
$$

#### Stokes' theorem

For an oriented surface $S$ with boundary $\partial S$,

$$
\boxed{
\oint_{\partial S}F\cdot dr
=\iint_S(\nabla\times F)\cdot n\,dS.
}
$$

Boundary orientation follows the right-hand rule relative to $n$. One can replace $S$ with another spanning surface with the same boundary and compatible orientation if the field is smooth on the relevant surfaces. The boundary can have several components.

#### Divergence theorem, also called Gauss' theorem

For a solid region $\Omega$ with outward-oriented closed boundary,

$$
\boxed{
\iint_{\partial\Omega}F\cdot n\,dS
=\iiint_\Omega\nabla\cdot F\,dV.
}
$$

A surface must be closed for direct use. If a surface is open, add a closing piece, apply the theorem, then subtract the flux through that piece. Inner cavity boundaries use normals pointing out of the solid and into the cavity.

**Example:** For $F=(x,y,z)$ and a sphere of radius $R$,

$$
\nabla\cdot F=3,\qquad
\iint_{\partial\Omega}F\cdot n\,dS
=3\cdot\frac{4\pi R^3}{3}=4\pi R^3.
$$

Directly, $F\cdot n=R$ on the sphere, and its area is $4\pi R^2$, giving the same answer.

#### Which theorem matches the integral?

| Integral or structure | First theorem to consider |
|---|---|
| Line integral of a gradient | Fundamental theorem for line integrals |
| Closed planar circulation | Green's circulation theorem |
| Closed planar outward flux | Green's flux theorem |
| Three-dimensional circulation around a boundary | Stokes' theorem |
| Flux through a closed surface | Divergence theorem |
| Curl-free field on a domain with holes | Check topology before claiming a potential |

The advanced unifying statement is generalized Stokes:

$$
\int_Md\omega=\int_{\partial M}\omega.
$$

Here $M$ is a compact oriented smooth manifold with boundary, $\omega$ is a sufficiently smooth differential form of degree $\dim M-1$, and $d$ is its exterior derivative. The boundary has the induced orientation. The classical theorems above are its concrete calculus manifestations.

### M.13 Integration by parts in several variables

Applying the divergence theorem to $uF$ gives

$$
\boxed{
\int_\Omega u\,\nabla\cdot F\,dV
=\int_{\partial\Omega}uF\cdot n\,dS
-\int_\Omega\nabla u\cdot F\,dV.
}
$$

Componentwise,

$$
\int_\Omega u\,\partial_iv\,dV
=\int_{\partial\Omega}uv\,n_i\,dS
-\int_\Omega v\,\partial_iu\,dV.
$$

These are direct analogues of $\int u\,dv=uv-\int v\,du$: a derivative transfers to another factor, its sign changes, and a boundary term appears.

#### Green's first identity

Set $F=\nabla v$:

$$
\boxed{
\int_\Omega\left(\nabla u\cdot\nabla v+u\Delta v\right)dV
=\int_{\partial\Omega}u\frac{\partial v}{\partial n}\,dS,
}
$$

where $\partial_nv=\nabla v\cdot n$.

#### Green's second identity

Subtract the first identity with $u$ and $v$ exchanged:

$$
\boxed{
\int_\Omega(u\Delta v-v\Delta u)\,dV
=\int_{\partial\Omega}\left(u\partial_nv-v\partial_nu\right)dS.
}
$$

#### Weak derivatives and weak formulations

For a compactly supported smooth test function $\varphi$ inside $\Omega$, the boundary term vanishes:

$$
\int_\Omega u\,\partial_i\varphi\,dx
=-\int_\Omega(\partial_i u)\varphi\,dx.
$$

This identity defines a **weak derivative** even when an ordinary pointwise derivative is unavailable. A weak derivative represented by a function is distinguished from a general distributional derivative, which may include singular terms.

For Poisson's equation $-\Delta u=f$ with homogeneous Dirichlet boundary conditions, multiply by a test function $v$ vanishing on the boundary and integrate by parts:

$$
\boxed{\int_\Omega\nabla u\cdot\nabla v\,dx=\int_\Omega fv\,dx.}
$$

The weak form reduces the highest derivative needed on $u$ from second to first. For nonzero boundary terms or different boundary conditions, keep the appropriate surface contribution; do not silently discard it.

### M.14 Matrix differential calculus

#### Conventions and basic differential rules

For a scalar $f(X)$ with $X\in\mathbb R^{m\times n}$, define the matrix gradient by

$$
df=\langle\nabla_Xf,dX\rangle_F
=\operatorname{tr}\left((\nabla_Xf)^TdX\right).
$$

This convention gives $\nabla_Xf$ the same shape as $X$.

$$
d(XY)=(dX)Y+X(dY),\qquad d(X^T)=(dX)^T,
$$

$$
\boxed{d(X^{-1})=-X^{-1}(dX)X^{-1}}
\quad\text{for invertible }X,
$$

$$
d\,\operatorname{tr}(X)=\operatorname{tr}(dX),
$$

$$
\boxed{d\det X=\det X\,\operatorname{tr}(X^{-1}dX)}
\quad\text{for invertible }X.
$$

The inverse formula comes from differentiating $XX^{-1}=I$. Matrix multiplication order must be preserved.

For a differentiable matrix path $X(t)$,

$$
\frac d{dt}X^{-1}=-X^{-1}X'X^{-1}.
$$

For real invertible matrices,

$$
d\log|\det X|=\operatorname{tr}(X^{-1}dX),\qquad
\nabla_X\log|\det X|=X^{-T}.
$$

Writing $\log\det X$ without absolute values requires $\det X>0$ in the real setting. On the symmetric positive definite cone, its gradient is $X^{-1}$ and

$$
D^2\log\det X[H,H]
=-\operatorname{tr}(X^{-1}HX^{-1}H)\le0
$$

for symmetric directions $H$. Thus $\log\det X$ is concave on that cone.

#### Standard vector and matrix gradients

All constants below are fixed and dimensions must be compatible.

| Scalar function | Gradient |
|---|---|
| $a^Tx$ | $a$ |
| $x^Tx$ | $2x$ |
| $x^TAx$ | $(A+A^T)x$ |
| $\tfrac12x^TAx$ for symmetric $A$ | $Ax$ |
| $\tfrac12\lVert Ax-b\rVert^2$ | $A^T(Ax-b)$ |
| $\tfrac12(Ax-b)^TW(Ax-b)$, symmetric $W$ | $A^TW(Ax-b)$ |
| $\lVert x\rVert$ for $x\ne0$ | $x/\lVert x\rVert$ |
| $\operatorname{tr}(A^TX)$ | $A$ |
| $\lVert X\rVert_F^2$ | $2X$ |
| $\operatorname{tr}(X^TAX)$ | $(A+A^T)X$ |
| $\tfrac12\lVert AXB-C\rVert_F^2$ | $A^T(AXB-C)B^T$ |
| $\log\lvert\det X\rvert$, invertible $X$ | $X^{-T}$ |

The Hessian of $\tfrac12\|Ax-b\|^2$ is $A^TA$. It is positive semidefinite, and positive definite exactly when $A$ has full column rank.

**Least-squares normal equations:** Stationarity gives

$$
A^TAx=A^Tb.
$$

If $A$ has full column rank, $x=(A^TA)^{-1}A^Tb$ mathematically. Numerically, QR or singular-value decompositions often avoid the conditioning penalty from explicitly forming $A^TA$.

For column-stacked vectorization,

$$
\operatorname{vec}(AXB)=(B^T\otimes A)\operatorname{vec}(X).
$$

Thus the Jacobian of $X\mapsto AXB$ in these vectorized coordinates is $B^T\otimes A$. A different vectorization convention changes the expression.

#### JVPs, VJPs, and Hessian-vector products

For $F:\mathbb R^n\to\mathbb R^m$:

- A **Jacobian-vector product** maps an input direction $v$ to $J_Fv$.
- A **vector-Jacobian product**, represented as a column cotangent, maps an output weight $u$ to $J_F^Tu$. In row notation it is $u^TJ_F$.
- For scalar $f$, a **Hessian-vector product** is $H_fv=D(\nabla f)[v]$.

These products can be computed without explicitly materializing full Jacobian or Hessian matrices. Backpropagation applies transposed Jacobians repeatedly to propagate scalar-objective sensitivities toward the inputs.

### M.15 Useful derivatives for probabilities and modern optimization

#### Softmax and log-sum-exp

For logits $z\in\mathbb R^n$,

$$
p_i=\frac{e^{z_i}}{\sum_je^{z_j}},\qquad
\frac{\partial p_i}{\partial z_j}=p_i(\delta_{ij}-p_j).
$$

Therefore

$$
\boxed{J_{\mathrm{softmax}}=\operatorname{diag}(p)-pp^T.}
$$

For $L(z)=\log\sum_je^{z_j}$,

$$
\nabla L=p,\qquad H_L=\operatorname{diag}(p)-pp^T\succeq0.
$$

For any vector $v$,

$$
v^TH_Lv=\sum_ip_iv_i^2-\left(\sum_ip_iv_i\right)^2\ge0.
$$

The Hessian is a covariance matrix and vanishes in the all-ones direction, reflecting invariance of softmax to a shared logit offset.

For cross-entropy $\ell(z)=-\sum_i y_i\log p_i$ with a fixed target distribution satisfying $y_i\ge0$ and $\sum_i y_i=1$,

$$
\boxed{\nabla_z\ell=p-y,\qquad H_\ell=\operatorname{diag}(p)-pp^T.}
$$

For sigmoid $\sigma(z)=1/(1+e^{-z})$,

$$
\sigma'(z)=\sigma(z)(1-\sigma(z)).
$$

The binary cross-entropy derivative with respect to its logit is $\sigma(z)-y$.

#### Differentiating an expectation: fixed support

Suppose $p_\theta(x)$ is a differentiable density, positive on its fixed support wherever the score is used, and differentiation may be moved through the integral, for example because suitable local dominating integrable bounds exist. For differentiable $f_\theta$,

$$
\boxed{
\nabla_\theta\mathbb E_{p_\theta}[f_\theta(X)]
=\mathbb E_{p_\theta}\left[
\nabla_\theta f_\theta(X)
+f_\theta(X)\nabla_\theta\log p_\theta(X)
\right].
}
$$

The logarithmic derivative is the **score**. Under the same regularity assumptions,

$$
\mathbb E_{p_\theta}[\nabla_\theta\log p_\theta(X)]=0.
$$

An $X$-independent baseline can therefore be subtracted from $f_\theta$ in the score term without changing its expectation. This identity does not license ignoring an explicit derivative of $f_\theta$.

#### Reparameterization or pathwise differentiation

If $X=T_\theta(\varepsilon)$ with $\varepsilon\sim q$ independent of $\theta$, then, under suitable interchange and differentiability assumptions,

$$
\boxed{
\nabla_\theta\mathbb E_q[f_\theta(T_\theta(\varepsilon))]
=\mathbb E_q\left[
\nabla_\theta f_\theta(X)
+J_{T_\theta}^T\nabla_xf_\theta(X)
\right].
}
$$

The explicit $\theta$ derivative treats $X$ as fixed; the second term differentiates the sampled value through $T_\theta$. Discontinuous sample maps or nonsmooth objectives may invalidate naive pathwise differentiation.

#### Moving-support warning

If the density support depends on $\theta$, boundary terms can appear. For $X\sim\mathrm{Uniform}(0,\theta)$ with $\theta>0$,

$$
\mathbb E[X]=\frac\theta2,\qquad \frac d{d\theta}\mathbb E[X]=\frac12.
$$

Using only the interior score $\partial_\theta\log p=-1/\theta$ would give $-1/2$, missing the moving-boundary contribution. Reparameterizing $X=\theta U$, $U\sim\mathrm{Uniform}(0,1)$ correctly gives $\mathbb E[U]=1/2$.

#### Multivariate Gaussian integral

For symmetric positive definite $A\in\mathbb R^{n\times n}$,

$$
\boxed{
\int_{\mathbb R^n}e^{-\frac12x^TAx}\,dx
=(2\pi)^{n/2}(\det A)^{-1/2}.
}
$$

Completing the square yields

$$
\int_{\mathbb R^n}e^{-\frac12x^TAx+b^Tx+c}\,dx
=(2\pi)^{n/2}(\det A)^{-1/2}
e^{c+\frac12b^TA^{-1}b}.
$$

Positive definiteness ensures decay in every direction and finiteness of the integral. For a covariance matrix $\Sigma\succ0$, set $A=\Sigma^{-1}$ to recover the Gaussian normalization factor $(2\pi)^{n/2}(\det\Sigma)^{1/2}$.

### M.16 Final error checklist

1. **Dimensions:** Does each gradient, Jacobian, and matrix product have the required shape?
2. **Dependence:** Have all implicit paths of variable dependence been included?
3. **Smoothness:** Are mixed partials, Taylor expansions, and derivative-integral interchanges justified?
4. **Local versus global:** Does a local inverse or local minimum really support the global claim being made?
5. **Regions:** Are the new integration limits a description of the same domain?
6. **Scaling:** Is the absolute Jacobian determinant included exactly once?
7. **Orientation:** Is the normal outward, and is the boundary direction compatible with it?
8. **Topology:** Are there holes, singularities, or omitted inner boundaries?
9. **Boundary terms:** Have integration-by-parts contributions been retained unless they actually vanish?
10. **Constraints:** Is the Hessian being tested in feasible directions, and are KKT multiplier signs consistent with the inequality convention?
11. **Matrix order:** Have noncommuting factors retained their order?
12. **Probability support:** Does the parameter alter the domain of integration, requiring a boundary contribution?

## Advanced connections

- [A.1 Differential equations as an application of calculus](#a1-differential-equations-as-an-application-of-calculus)
- [A.2 Calculus of variations and functional derivatives](#a2-calculus-of-variations-and-functional-derivatives)
- [A.3 Convolution, Fourier and Laplace transforms](#a3-convolution-fourier-and-laplace-transforms)
- [A.4 Nonsmooth and generalized differentiation and integration](#a4-nonsmooth-and-generalized-differentiation-and-integration)
- [A.5 Complex-calculus formulas used to evaluate real integrals](#a5-complex-calculus-formulas-used-to-evaluate-real-integrals)
- [A.6 Probability integrals and Monte Carlo integration](#a6-probability-integrals-and-monte-carlo-integration)

### A.1 Differential equations as an application of calculus

A differential equation relates a function to its derivatives. These are the most reusable elementary patterns; solving an equation must also respect its domain and initial or boundary conditions.

#### Separable first-order equation

For $y'=g(x)h(y)$, on an interval where $h(y)\ne0$,

$$
\int\frac{dy}{h(y)}=\int g(x)\,dx+C.
$$

Before dividing by $h$, separately check constant solutions $y=y_*$ with $h(y_*)=0$. Division can otherwise erase equilibrium solutions.

Example:

$$
y'=ky\quad\Longrightarrow\quad y=Ce^{kx},
$$

including $y\equiv0$.

For logistic growth $y'=ry(1-y/K)$ with $r,K>0$, nonzero solutions have the form

$$
y(x)=\frac{K}{1+Ae^{-rx}}
$$

on intervals where the denominator does not vanish. The equilibrium solutions are $y=0$ and $y=K$; the latter is included by $A=0$.

#### Linear first-order equation and integrating factor

For

$$
y'+p(x)y=q(x),
$$

take $\mu(x)=e^{\int p(x)\,dx}$. The product rule gives

$$
(\mu y)'=\mu q,\qquad
y=\frac1\mu\left(\int\mu q\,dx+C\right).
$$

Example:

$$
y'+2y=e^x
\quad\Longrightarrow\quad
(e^{2x}y)'=e^{3x}
\quad\Longrightarrow\quad
y=\frac13e^x+Ce^{-2x}.
$$

#### Bernoulli equation

For

$$
y'+p(x)y=q(x)y^n,\qquad n\ne0,1,
$$

put $v=y^{1-n}$ on an interval where the power is defined and the substitution is valid. Then

$$
v'+(1-n)p(x)v=(1-n)q(x),
$$

a linear equation. Again check solutions lost by dividing by a power of $y$.

#### Exact differential equation

For

$$
M(x,y)\,dx+N(x,y)\,dy=0,
$$

look for a potential $\Phi$ with $\Phi_x=M$, $\Phi_y=N$. A local test on a rectangle with $C^1$ coefficients is

$$
M_y=N_x.
$$

Then $\Phi(x,y)=C$ describes the implicit solution curves. On a general domain, topology matters for a global potential.

Recover $\Phi$ by integrating $M$ in $x$:

$$
\Phi(x,y)=\int M(x,y)\,dx+h(y),
$$

and determine $h$ from $\Phi_y=N$. Here the “constant of integration” is a function of the other variable.

#### Homogeneous second-order linear equation with constant coefficients

For constant real coefficients $a,b,c$, consider

$$
ay''+by'+cy=0,\qquad a\ne0.
$$

Solve $ar^2+br+c=0$.

| Characteristic roots | General real solution |
|---|---|
| Distinct real $r_1,r_2$ | $C_1e^{r_1x}+C_2e^{r_2x}$ |
| Repeated real $r$ | $(C_1+C_2x)e^{rx}$ |
| $\alpha\pm i\beta$, $\beta>0$ | $e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)$ |

For a nonhomogeneous equation, $y=y_h+y_p$. Undetermined coefficients and variation of parameters find a particular solution; matching a forcing term to a homogeneous solution requires a resonance correction.

#### Repeated integration

For continuous $f$ and integer $n\ge1$, the $n$fold integral from a fixed lower endpoint is

$$
(I_a^nf)(x)
=\frac1{(n-1)!}\int_a^x(x-t)^{n-1}f(t)\,dt,
\qquad x\ge a.
$$

Thus a solution to $y^{(n)}=f$ with prescribed $y^{(k)}(a)$ is

$$
y(x)=\sum_{k=0}^{n-1}\frac{y^{(k)}(a)}{k!}(x-a)^k
+\frac1{(n-1)!}\int_a^x(x-t)^{n-1}f(t)\,dt.
$$

This is also the structure behind the integral remainder in Taylor's theorem.

### A.2 Calculus of variations and functional derivatives

Ordinary optimization varies finitely many coordinates. Variational calculus varies an entire function or trajectory.

Let

$$
J[y]=\int_a^b L(x,y(x),y'(x))\,dx.
$$

For a perturbation $y_\varepsilon=y+\varepsilon\eta$,

$$
\delta J[y;\eta]
=\left.\frac{d}{d\varepsilon}J[y+\varepsilon\eta]\right|_{\varepsilon=0}
=\int_a^b\left(L_y\eta+L_{y'}\eta'\right)\,dx.
$$

Integration by parts moves the derivative off the perturbation:

$$
\delta J
=\left[L_{y'}\eta\right]_a^b
+\int_a^b\left(L_y-\frac{d}{dx}L_{y'}\right)\eta\,dx.
$$

For fixed endpoint values, $\eta(a)=\eta(b)=0$. A sufficiently smooth stationary function must satisfy the **Euler–Lagrange equation**:

$$
\boxed{L_y-\frac{d}{dx}L_{y'}=0.}
$$

The interior functional derivative, with the $L^2$ pairing, is

$$
\frac{\delta J}{\delta y}=L_y-\frac{d}{dx}L_{y'}.
$$

This is a necessary stationarity condition under the usual regularity hypotheses; it does not by itself prove a minimum.

**Boundary conditions matter.** If the endpoint location is fixed but the endpoint value of $y$ is free, its perturbation need not vanish. The corresponding natural boundary condition is $L_{y'}=0$ there. Moving endpoint locations require additional transversality conditions.

#### Example: smooth trajectory fitting

For fixed endpoints and $\lambda>0$,

$$
J[y]=\int_a^b\left[
\frac12(y(x)-d(x))^2+\frac\lambda2(y'(x))^2
\right]dx.
$$

The data-fitting term has derivative $y-d$; the derivative penalty contributes $-\lambda y''$ after integration by parts:

$$
\frac{\delta J}{\delta y}=y-d-\lambda y'',\qquad
y-\lambda y''=d.
$$

If instead the functional contains $\frac\lambda2(y'')^2$, the interior contribution is $+\lambda y^{(4)}$, with additional boundary terms.

#### Other reusable forms

For $L=L(x,y,y',\ldots,y^{(m)})$ and variations whose boundary terms vanish:

$$
\sum_{k=0}^{m}(-1)^k
\frac{d^k}{dx^k}
\left(\frac{\partial L}{\partial y^{(k)}}\right)=0.
$$

For a field $u:\Omega\subset\mathbb R^n\to\mathbb R$,

$$
J[u]=\int_\Omega L(x,u,\nabla u)\,dx
\quad\Longrightarrow\quad
\frac{\delta J}{\delta u}
=L_u-\nabla\cdot L_{\nabla u}.
$$

For $L$ with no explicit $x$ dependence, the **Beltrami identity** is

$$
L-y'L_{y'}=\text{constant}
$$

along a smooth Euler–Lagrange solution.

For an integral constraint $\int G(x,y,y')\,dx=c$, a suitable multiplier gives the augmented integrand $L+\lambda G$ under the corresponding constraint regularity assumptions.

### A.3 Convolution, Fourier and Laplace transforms

These methods convert some differentiation and integration problems into algebraic ones. The normalization and boundary assumptions determine the signs and constants.

#### Convolution on the real line

$$
(f*g)(x)=\int_{-\infty}^{\infty}f(t)g(x-t)\,dt.
$$

For integrable functions, convolution is commutative and associative in the standard almost-everywhere sense. If differentiation is justified, and the necessary boundary terms vanish when transferring the derivative between factors,

$$
(f*g)'=f*g'=f'*g.
$$

The equality involving $f'$ follows from integration by parts; it is not valid without sufficient regularity and boundary control.

#### Fourier transform

Use

$$
\widehat f(\omega)=\int_{\mathbb R}f(x)e^{-i\omega x}\,dx.
$$

For a smooth rapidly decaying function, or more generally when $f,\widehat f\in L^1$ and $f$ is continuous at the evaluation point, inversion with this normalization gives

$$
f(x)=\frac1{2\pi}\int_{\mathbb R}\widehat f(\omega)e^{i\omega x}\,d\omega.
$$

Sufficiently smooth, rapidly decaying functions satisfy

$$
\widehat{f'}(\omega)=i\omega\widehat f(\omega),\qquad
\widehat{f^{(n)}}(\omega)=(i\omega)^n\widehat f(\omega),
$$

$$
\widehat{xf}(\omega)=i\frac{d}{d\omega}\widehat f(\omega),\qquad
\widehat{f*g}=\widehat f\,\widehat g.
$$

The first identity is integration by parts with $[f(x)e^{-i\omega x}]_{-\infty}^{\infty}=0$.

For functions in $L^1\cap L^2$, and more generally by the $L^2$ extension, Parseval–Plancherel with this normalization gives

$$
\int_{\mathbb R}|f(x)|^2\,dx
=\frac1{2\pi}\int_{\mathbb R}|\widehat f(\omega)|^2\,d\omega.
$$

#### One-sided Laplace transform

$$
\mathcal L\{f\}(s)=F(s)=\int_0^\infty e^{-st}f(t)\,dt.
$$

Work in a half-plane where the integrals converge. With sufficient smoothness and exponential growth control:

$$
\mathcal L\{f'\}(s)=sF(s)-f(0^+),
$$

$$
\mathcal L\{f''\}(s)=s^2F(s)-sf(0^+)-f'(0^+),
$$

$$
\mathcal L\left\{\int_0^t f(\tau)\,d\tau\right\}(s)=\frac{F(s)}s,
$$

$$
\mathcal L\{t f(t)\}(s)=-F'(s).
$$

For the causal convolution

$$
(f*g)(t)=\int_0^t f(\tau)g(t-\tau)\,d\tau,
$$

the transform is $F(s)G(s)$ under absolute-convergence conditions.

| Function | Laplace transform | Simple real convergence condition |
|---|---|---|
| $1$ | $1/s$ | $s>0$ |
| $t^n$, integer $n\ge0$ | $n!/s^{n+1}$ | $s>0$ |
| $e^{at}$ | $1/(s-a)$ | $s>a$ |
| $\sin bt$ | $b/(s^2+b^2)$ | $s>0$ |
| $\cos bt$ | $s/(s^2+b^2)$ | $s>0$ |

### A.4 Nonsmooth and generalized differentiation and integration

#### Subgradients for convex functions

If a convex function $f$ is not differentiable at $x$, a subgradient $g$ satisfies

$$
f(y)\ge f(x)+g^\top(y-x)
\quad\text{for all }y.
$$

The set of subgradients is $\partial f(x)$. For example:

$$
\partial|x|=
\begin{cases}
\{-1\},&x<0,\\
[-1,1],&x=0,\\
\{1\},&x>0.
\end{cases}
$$

For convex $f$ on $\mathbb R^n$, $0\in\partial f(x)$ is equivalent to $x$ being a global minimizer. A selected subgradient at a kink is not an ordinary classical derivative.

#### Weak derivatives and distributions

A locally integrable $g$ is a weak derivative of locally integrable $f$ if

$$
\int f(x)\varphi'(x)\,dx=-\int g(x)\varphi(x)\,dx
$$

for every smooth compactly supported test function $\varphi$.

More generally a distribution $T$ is differentiated by

$$
\langle T',\varphi\rangle=-\langle T,\varphi'\rangle.
$$

The Dirac delta is defined through its action:

$$
\langle\delta_a,\varphi\rangle=\varphi(a).
$$

Useful distributional identities:

$$
H'=\delta_0,\qquad
(|x|)'=\operatorname{sgn}(x),\qquad
(|x|)''=2\delta_0.
$$

Here $H$ is the unit step; its chosen value at the single point $0$ does not affect these distributional identities.

For nonzero real $a$:

$$
\delta(ax)=\frac{\delta(x)}{|a|}.
$$

For a smooth $g$ with isolated simple real zeros $x_i$:

$$
\delta(g(x))=\sum_i\frac{\delta(x-x_i)}{|g'(x_i)|},
$$

locally where the roots are simple. A repeated root does not satisfy this formula.

#### Riemann–Stieltjes and Lebesgue viewpoints

Riemann–Stieltjes integration replaces increments $\Delta x$ by increments of an integrator $\alpha$:

$$
\int_a^b f(x)\,d\alpha(x).
$$

If $\alpha\in C^1$ and $f$ is continuous:

$$
\int_a^b f\,d\alpha=\int_a^b f(x)\alpha'(x)\,dx.
$$

For continuous bounded-variation functions $f,g$, integration by parts reads

$$
\int_a^b f\,dg+\int_a^b g\,df=[fg]_a^b.
$$

If both functions have jumps, jump conventions and correction terms require care.

Lebesgue integration handles measurable functions and provides the convergence theorems used for expectations and parameterized integrals. If $f\in L^1([a,b])$, then

$$
F(x)=\int_a^x f(t)\,dt
$$

is absolutely continuous and $F'=f$ almost everywhere. Conversely, absolute continuity gives

$$
F(x)-F(a)=\int_a^x F'(t)\,dt.
$$

Merely having a derivative almost everywhere is insufficient for this converse.

### A.5 Complex-calculus formulas used to evaluate real integrals

These are advanced extensions; they require **complex analyticity**, which is much stronger than real differentiability.

For $z=x+iy$ and $f(z)=u(x,y)+iv(x,y)$, complex differentiability implies the Cauchy–Riemann equations

$$
u_x=v_y,\qquad u_y=-v_x.
$$

If the first partial derivatives are continuous on an open set and these equations hold throughout it, then $f$ is holomorphic there.

For a piecewise smooth closed simple contour $C$, oriented counterclockwise, and $f$ holomorphic on an open set containing the contour and its interior:

$$
\oint_C f(z)\,dz=0.
$$

For $z_0$ inside $C$, Cauchy's integral formula and its derivative version are

$$
f^{(n)}(z_0)=\frac{n!}{2\pi i}
\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz,\qquad n\ge0.
$$

If $f$ is holomorphic inside and on $C$ except at finitely many isolated singularities $z_k$ strictly inside:

$$
\boxed{\oint_C f(z)\,dz
=2\pi i\sum_k\operatorname{Res}(f,z_k).}
$$

For a simple pole:

$$
\operatorname{Res}(f,z_0)=\lim_{z\to z_0}(z-z_0)f(z).
$$

For a pole of order $m$:

$$
\operatorname{Res}(f,z_0)
=\frac1{(m-1)!}
\lim_{z\to z_0}
\frac{d^{m-1}}{dz^{m-1}}
\left[(z-z_0)^m f(z)\right].
$$

**Example.** For $a>0$, close $1/(z^2+a^2)$ with an upper semicircle. The arc contribution tends to zero, and only $z=ia$ lies inside. Its residue is $1/(2ia)$, so

$$
\int_{-\infty}^{\infty}\frac{dx}{x^2+a^2}=\frac\pi a.
$$

For other integrands, arc decay, branch cuts, poles on the contour and principal-value interpretations must be checked separately.

### A.6 Probability integrals and Monte Carlo integration

For a probability density $p$,

$$
\mathbb E[f(X)]=\int f(x)p(x)\,dx.
$$

For a nonnegative random variable $X$, Tonelli gives the tail formula

$$
\mathbb E[X]=\int_0^\infty\Pr(X>t)\,dt,
$$

allowing $+\infty$. More generally, for $r>0$,

$$
\mathbb E[X^r]
=r\int_0^\infty t^{r-1}\Pr(X>t)\,dt.
$$

#### Monte Carlo on a bounded region

For a region $\Omega$ of finite positive volume $V$, sample $X_1,\ldots,X_N$ independently and uniformly from $\Omega$. Then

$$
\widehat I_N=\frac VN\sum_{i=1}^N f(X_i)
$$

is an unbiased estimate of $I=\int_\Omega f(x)\,dx$ when $f$ is absolutely integrable on $\Omega$. If $f(X)$ has finite variance,

$$
\operatorname{Var}(\widehat I_N)
=\frac{V^2}{N}\operatorname{Var}(f(X)).
$$

The root-mean-square error therefore scales as $N^{-1/2}$. This is a statistical error statement, not a deterministic bound for every realized sample.

#### Importance sampling

For absolutely integrable $f$ on $\Omega$ and a density $q$ on $\Omega$ that is positive almost everywhere that the integrand contributes,

$$
\int_\Omega f(x)\,dx
=\mathbb E_{X\sim q}\left[\frac{f(X)}{q(X)}\right].
$$

The corresponding estimator is

$$
\widehat I_N=\frac1N\sum_{i=1}^N\frac{f(X_i)}{q(X_i)}.
$$

Finite variance requires $\int_\Omega f(x)^2/q(x)\,dx<\infty$. A poor proposal density can create infinite variance even when the target integral is finite.

Parameter gradients of expectations, reparameterization and score-function identities are covered in the multivariable chapter.

## Revision checklist and self test

- [R.1 What to memorize and what to reconstruct](#r1-what-to-memorize-and-what-to-reconstruct)
- [R.2 The final error checklist](#r2-the-final-error-checklist)
- [R.3 Self-test](#r3-self-test)
- [R.4 References for further revision](#r4-references-for-further-revision)

### R.1 What to memorize and what to reconstruct

The strongest revision strategy is to remember a small set of generators and reconstruct the larger table when needed.

| Memorize fluently | Reconstruct from it |
|---|---|
| Product and chain rules | Integration by parts and substitution |
| Derivatives of $\sin,\cos,e^x,\ln x$ | Most elementary derivative/antiderivative patterns |
| $\sin^2x+\cos^2x=1$ and double-angle identities | Trigonometric power reductions |
| Fundamental theorem and moving-endpoint rule | Accumulation derivatives and most Leibniz examples |
| Taylor coefficients and error term | Local approximations, limits, finite differences |
| Gradient/Jacobian conventions | Multivariable chain rule and backpropagation |
| Product divergence identity | Multivariable integration by parts and Green identities |
| Domain and convergence checks | Which apparently plausible manipulations are actually allowed |

Suggested order for revision:

1. Definitions, domains, standard limits, elementary derivative/antiderivative tables.
2. Substitution, integration by parts, partial fractions, trigonometric and radical techniques.
3. FTC, definite-integral symmetry, improper convergence and numerical integration.
4. Implicit/logarithmic/parametric differentiation, extrema, Taylor approximation and remainder.
5. Gradients, Jacobians, Hessians, constraints and multiple integrals.
6. Vector integral theorems, matrix calculus, expectation gradients and variational identities.

### R.2 The final error checklist

#### Before differentiating

1. Identify the variable and all explicit and implicit dependence.
2. Specify the real domain; logarithms, inverse functions and roots have restrictions.
3. Apply the chain rule at every level.
4. For a piecewise function, inspect the junction using the definition; do not differentiate only the two open pieces.
5. Keep partial and total derivatives distinct.
6. Check vector/matrix dimensions and multiplication order.
7. If the expression contains an integral or infinite series, justify the interchange.

#### Before integrating

1. Distinguish indefinite integration, signed definite accumulation and geometric area.
2. Simplify algebra and test the reverse chain rule first.
3. Identify all singularities before using an antiderivative.
4. Change limits together with the variable, or return entirely to the original variable before evaluation.
5. In integration by parts, retain every boundary term until its limit is known.
6. Include absolute values in logarithmic primitives when required.
7. For multiple integrals, transform the region and the measure, including the absolute Jacobian.
8. For oriented integrals, check boundary directions and normals.
9. Verify convergence before invoking oddness, periodicity or cancellation.
10. Differentiate an indefinite answer; for a definite answer, also check its sign, magnitude and units.

#### Before declaring an optimum or approximation

1. A stationary point is a candidate; test and compare it.
2. Include endpoints, boundaries, corners and points where derivatives fail.
3. A zero second derivative is inconclusive.
4. A semidefinite Hessian at a single stationary point is generally inconclusive.
5. A constrained Hessian must be tested along feasible directions.
6. A Taylor polynomial is an approximation with a remainder.
7. Check the radius and endpoints of a power series.
8. Rounding and cancellation limit how small a finite-difference step should be.

#### Before differentiating a tensor map or an integral operator

1. Separate free output indices, input indices, contraction indices and batch indices.
2. Decide whether the required object is a complete derivative tensor, a JVP, a VJP or a Hessian action.
3. State the inner product or dual pairing before identifying a derivative with a gradient or an adjoint.
4. Retain all axes of a tensor-valued observable; a scalar loss is one special case.
5. Keep external direction seeds fixed in higher derivatives, while preserving genuine dependence of an upstream loss gradient.
6. Record the measure, domain, quadrature nodes and weights, and differentiate every part that depends on the parameter.
7. Distinguish the derivative of a continuous model from the derivative of its finite discretization.
8. Verify the adjoint pairing, including boundary conditions and quadrature weights.

### R.3 Self-test

Attempt these without using the tables. The answer key follows.

| No. | Task |
|---|---|
| 1 | Evaluate $\int 2x\cos(x^2)\,dx$. |
| 2 | Evaluate $\int x^2e^x\,dx$. |
| 3 | Evaluate $\int\ln x\,dx$ for $x>0$. |
| 4 | Evaluate $\int dx/(x^2+2x+5)$. |
| 5 | Evaluate $\int_0^1 x\ln x\,dx$, treating the endpoint correctly. |
| 6 | Evaluate $\int_0^{\pi/2}\sin x/(\sin x+\cos x)\,dx$. |
| 7 | For which real $p$ does $\int_e^\infty dx/[x(\ln x)^p]$ converge, and to what? |
| 8 | Differentiate $\int_x^{x^2} e^{t^2}\,dt$. |
| 9 | Differentiate $x^x$ on $x>0$. |
| 10 | For $x^2+y^2=1$, find $y'$ and $y''$ where $y\ne0$. |
| 11 | Find $\lim_{x\to0}(e^x-1-x)/x^2$. |
| 12 | Classify the stationary point of $f(x)=x^4$ at $0$. |
| 13 | Find $\nabla f$ and $H_f$ for $f(x,y)=x^2+xy+2y^2$. |
| 14 | Find the maximum directional derivative of $f(x,y)=x^2+y^2$ at $(3,4)$, over unit directions. |
| 15 | Evaluate $\int_0^1\int_x^1 e^{y^2}\,dy\,dx$. |
| 16 | Evaluate $\iint_{x^2+y^2\le R^2}(x^2+y^2)\,dA$, $R>0$. |
| 17 | Compute the outward flux of $F=(x,y,z)$ through the sphere of radius $R$. |
| 18 | Differentiate $\tfrac12\lVert Ax-b\rVert^2$ with respect to $x$. |
| 19 | Find the interior functional derivative of $\int[\tfrac12(y-d)^2+\tfrac\lambda2(y')^2]\,dx$ with fixed endpoint values. |
| 20 | If $X\sim\mathrm{Uniform}(0,\theta)$, find $d\mathbb E[X]/d\theta$ and identify why the interior-score-only calculation fails. |
| 21 | For $Y_{ij}=A_{ik}B_{kj}$, give the JVP and the VJP with output cotangent $G_{ij}$ under Frobenius pairings. |
| 22 | For $f(X)=\tfrac12\lVert AX-B\rVert_F^2$ with fixed $A,B$, compute the Hessian action on a direction $V$. |
| 23 | For $(\mathcal Kx)(s)=\int_0^s x(t)\,dt$ on $[0,1]$, find its $L^2$ adjoint and its terminal boundary condition. |
| 24 | Let $A=KW$, with positive diagonal input/output weight matrices $W,V$. Compare the Euclidean transpose with the adjoint under the corresponding weighted inner products. |
| 25 | For $\mathcal J[X]=\tfrac12\lVert\mathcal KX-y\rVert^2+\tfrac\lambda2\lVert X\rVert^2$, with bounded linear $\mathcal K$ and $\lambda\ge0$, find the gradient and Hessian operator. |
| 26 | Differentiate $Q(\theta)=\sum_q w_q(\theta)f(t_q(\theta),\theta)$, accounting for moving quadrature nodes. |

#### Answer key

1. $\sin(x^2)+C$ by $u=x^2$.
2. $e^x(x^2-2x+2)+C$ by repeated integration by parts.
3. $x\ln x-x+C$ by $u=\ln x$, $dv=dx$.
4. $\tfrac12\arctan((x+1)/2)+C$ after completing the square.
5. $-1/4$. The primitive is $\tfrac12x^2\ln x-\tfrac14x^2$, and $x^2\ln x\to0$ as $x\to0^+$.
6. $\pi/4$ by reflection $x\mapsto\pi/2-x$.
7. Converges exactly for $p>1$, to $1/(p-1)$. Use $u=\ln x$.
8. $2x e^{x^4}-e^{x^2}$.
9. $x^x(\ln x+1)$.
10. $y'=-x/y$ and $y''=-1/y^3$ on the unit circle where $y\ne0$.
11. $1/2$ by Taylor expansion or two applications of L'Hôpital.
12. A strict global minimum, despite $f''(0)=0$.
13. $\nabla f=(2x+y,\ x+4y)^T$ and $H_f=\begin{pmatrix}2&1\\1&4\end{pmatrix}$.
14. $10$, in direction $(3/5,4/5)$.
15. $(e-1)/2$ by reversing the order to $0\le x\le y\le1$.
16. $\pi R^4/2$ from $\int_0^{2\pi}\int_0^R r^3\,dr\,d\theta$.
17. $4\pi R^3$, because $\nabla\cdot F=3$.
18. $A^T(Ax-b)$; its Hessian is $A^TA$.
19. $y-d-\lambda y''$.
20. $1/2$. The support endpoint moves with $\theta$, so the integral derivative contains a boundary term. Reparameterizing $X=\theta U$ with fixed $U\sim\mathrm{Uniform}(0,1)$ also gives $1/2$.
21. $\dot Y_{ij}=\dot A_{ik}B_{kj}+A_{ik}\dot B_{kj}$; $\bar A_{ik}=G_{ij}B_{kj}$ and $\bar B_{kj}=A_{ik}G_{ij}$. In matrix form these are $\dot A B+A\dot B$, $GB^T$ and $A^TG$.
22. $H_f[X][V]=A^TAV$. The Hessian is a linear map on matrices; no dense fourth-order array needs to be formed.
23. $(\mathcal K^\ast g)(t)=\int_t^1g(s)\,ds$. Thus $z'=-g$ almost everywhere and $z(1)=0$.
24. $A^T=WK^T$, whereas $A^\dagger=W^{-1}A^TV=K^TV$. They represent different pairings.
25. $\nabla\mathcal J[X]=\mathcal K^\ast(\mathcal KX-y)+\lambda X$ and $\mathcal H=\mathcal K^\ast\mathcal K+\lambda I$. The Hessian is positive semidefinite, and is bounded below by $\lambda I$ when $\lambda>0$.
26. $Q'=\sum_q\bigl[w_q'f(t_q,\theta)+w_q\partial_\theta f(t_q,\theta)+w_q\partial_t f(t_q,\theta)t_q'\bigr]$. With vector nodes, the last product becomes the spatial directional derivative.

### R.4 References for further revision

The explanations and examples in this sheet are written as a unified revision reference. The following primary educational and mathematical references provide complementary tables, theorem statements and longer derivations.

1. [OpenStax Calculus Volume 1 — Table of Derivatives](https://openstax.org/books/calculus-volume-1/pages/b-table-of-derivatives). Elementary, inverse-trigonometric and hyperbolic derivative tables.
2. [OpenStax Calculus Volume 2 — Integration by Parts](https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts). The product-rule derivation and applications of the integration-by-parts identity.
3. [MIT OpenCourseWare — Single Variable Calculus, Techniques of Integration](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-4-techniques-of-integration/). Lessons and practice on the principal integration methods.
4. [MIT OpenCourseWare — Multivariable Calculus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/). Gradients, constrained optimization, multiple integration, line/surface integrals and vector integral theorems.
5. [NIST Digital Library of Mathematical Functions — Gamma Function Definitions](https://dlmf.nist.gov/5.2). Euler's gamma integral and its domain of convergence.
6. [NIST Digital Library of Mathematical Functions — Beta Function](https://dlmf.nist.gov/5.12). The beta integral, gamma relation and trigonometric forms.
7. [Petersen and Pedersen — The Matrix Cookbook](https://www2.imm.dtu.dk/pubdb/edoc/imm3274.pdf). A larger collection of matrix identities and derivative formulas; align gradient conventions before transferring a formula.
8. [MIT OpenCourseWare — Principles of Optimal Control, Calculus of Variations](https://ocw.mit.edu/courses/16-323-principles-of-optimal-control-spring-2008/resources/lec5/). Variational methods for continuous optimization.
9. [MIT OpenCourseWare — Complex Variables with Applications, Lecture Notes](https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/pages/lecture-notes/). Complex derivatives, Cauchy's formula, contour integration and residues.
10. [Baydin et al. — Automatic Differentiation in Machine Learning: A Survey](https://arxiv.org/abs/1502.05767). Forward and reverse accumulation, computational graphs and higher derivatives.
11. [JAX — Forward- and reverse-mode autodiff](https://docs.jax.dev/en/latest/jacobian-vector-products.html). Derivations of JVPs, VJPs and several mixed-mode Hessian-vector constructions.
12. [JAX — Hessian transformation](https://docs.jax.dev/en/latest/_autosummary/jax.hessian.html). The output-axis and input-axis structure of higher derivatives of tensor-valued maps.
13. [JAX — Gradient checkpointing](https://docs.jax.dev/en/latest/gradient-checkpointing.html). The computation–memory tradeoff in reverse accumulation.
