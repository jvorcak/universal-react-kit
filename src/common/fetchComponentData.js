export default function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) =>
      (current.needs || [])
        .concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
        .concat(prev)
    , []);

  const promises = needs
    .map(need => dispatch(need(params)))
    .map(action => action.payload.promise);
  return Promise.all(promises);
}
