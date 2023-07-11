//Avoid any
function doc(document: any) {
  document.move();
}

// Use unkown for variable we don't known its type
function docs(document: unknown) {
  if (typeof document === 'string') {
    document.toUpperCase();
    console.log('Hola!');
  }
}
