import routing from './routing';
jest.mock('react', () => {
  const React = jest.requireActual('react');
  const lazy = jest.fn().mockImplementation((fn) => {
    fn();
    return () => <h1>Hello</h1>;
  });
  return {
    ...React,
    lazy,
  };
});
test('generateRoute should give list of Routes', () => {
  const routesLength = routing.length;
  expect(routesLength).toEqual(25);
});
