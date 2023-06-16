import { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Hello from "./Hello.svelte";
import useStore from "./store";
import Counter from "./Counter.svelte";

function SvelteWrapper(Component: any) {
  return (props: any) => {
    const svelteRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      while (svelteRef.current?.firstChild) {
        svelteRef.current.firstChild.remove();
      }
      new Component({
        //@ts-ignore
        target: svelteRef.current,
        props,
      });
    }, []);
    return <div ref={svelteRef}></div>;
  };
}

const SvelteHello = SvelteWrapper(Hello);
const CounterHello = SvelteWrapper(Counter);

function App() {
  const { count, increment } = useStore();

  return (
    <>
      <SvelteHello extraText="haha" />
      <button className="btn btn-success " onClick={increment}>
        count is {count}
      </button>
      <CounterHello />
    </>
  );
}

export default App;
