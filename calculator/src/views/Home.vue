<template>
  <div class="calculator">
    <div class="result" style="grid-area:result">0</div>
    <button style="grid-area:ac">AC</button>
    <button style="grid-area:percent">%</button>
    <button style="grid-area:clear">←</button>
    <button style="grid-area:reciprocal">1/x</button>
    <button style="grid-area:evolution">√x</button>
    <button style="grid-area:square">x²</button>
    <button style="grid-area:plus-minus">+/-</button>
    <button style="grid-area:add">+</button>
    <button style="grid-area:subtract">-</button>
    <button style="grid-area:multipy">*</button>
    <button style="grid-area:divide">/</button>
    <button style="grid-area:equal">=</button>

    <button style="grid-area:number-1">1</button>
    <button style="grid-area:number-2">2</button>
    <button style="grid-area:number-3">3</button>
    <button style="grid-area:number-4">4</button>
    <button style="grid-area:number-5">5</button>
    <button style="grid-area:number-6">6</button>
    <button style="grid-area:number-7">7</button>
    <button style="grid-area:number-8">8</button>
    <button style="grid-area:number-9">9</button>
    <button style="grid-area:number-0">0</button>
    <button style="grid-area:number-dot">.</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.calculator{
    position: absolute;
    bottom: 0;
    width: 5rem;
    height: 5rem;
  --button-width: 1.6rem;
  --button-height: 1.1rem;
  display: grid;
  grid-template-areas:
    "result result result result"
    "ac percent clear clear"
    "reciprocal evolution square divide"
    "number-7 number-8 number-9 multipy"
    "number-4 number-5 number-6 subtract"
    "number-1 number-2 number-3 add"
    "plus-minus number-0 number-dot equal";
  grid-template-columns: repeat(4, var(--button-width));
  grid-template-rows: repeat(7, var(--button-height));
  font-size: 0.4rem;
  font-weight: 700;
}
.calculator :hover{
    background: #fff;
}
.result{
      text-align: right;
      line-height: var(--button-height);
      font-size: 0.8rem;
      padding: 0 0.4rem;
  }
</style>