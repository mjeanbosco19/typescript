// TypeScript - Parameter Decorator
type WatchedParameter = { methodName: string; parameterIndex: number };
const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
  console.log(`target: ${target}`);
  console.log(`methodName: ${methodName}`);
  console.log(`paramIndex: ${parameterIndex}`);
}

class Vehicle {
  move(@Watch speed: number) {
    console.log(`Vehicle is moving at ${speed} km/h`);
  }
}

console.log(watchedParameters);
