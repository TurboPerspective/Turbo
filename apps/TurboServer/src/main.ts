import { TurboServer } from './TurboServer';


let perspective: any;

async function initializePerspective() {
  // Your code that uses perspective goes here
  return await import('@finos/perspective/dist/esm/perspective.node.js');
}



initializePerspective().then(p => {
  perspective = p;
  const t = new TurboServer(perspective);
  t.start();
});

