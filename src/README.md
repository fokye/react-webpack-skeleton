## What's in this directory

A general convention throughout the app is to place each logical
unit within its own *directory*, with an *index.js* providing the
entry-point to that component, and other related files alongside it.

The CSS module for a component live within a *styles.css* file in
that component's directory.

Tests for each script live alongside it, in a file named *spec.js*.

### Actions

Within the **actions** directory are *action creators* for Redux actions.
In essence, these are *functions* intended to be used directly as *callbacks*
on React components. These callbacks are typically injected via the `connect()`
function provided by the `react-redux` library.

An action creator accepts any number of arguments and returns a *function* that
receives a reference to an action dispatcher (`dispatch()`) and a `getState()`
which provides the current Redux state, if needed.

See: [`redux-thunk`](https://github.com/gaearon/redux-thunk) for a more thorough
explanation of this pattern.

### Components

Within the **components** directory are stateless React components. These components
have no magic -- no Redux, no dependencies on implicit context or globals. All
dependencies are declared in each component's `propTypes` and injected via `props`.

### Reducer

Within the **reducer** directory of a *scene* (including the top-level one) is
that scene's Redux reducer creator. Each scene has only one reducer.

Reducers are responsible for changing the app state in response to actions that
have been dispatched. Using a *reducer creator* pattern, we allow the *initial state*
of a reducer to be injected, instead of defining this statically.

See [Redux Basics: Reducers](http://redux.js.org/docs/basics/Reducers.html) for
a more in-depth explanation of Redux reducers.

### Scenes

Within the **scenes** directory is a set of *child scenes* of the current one.
A *scene* is, in essence, a cohesive *view* within the app. It's most akin to
a *route*, but is not necessarily tethered to navigation.

Scenes are intended to help with code organization in larger projects, where
there may be several generally applicable UI components and units of app logic,
and a "long tail" of very domain-specific components and logic.

See [How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)
for rationale on the *scene-oriented* organization strategy.

### Services

Within the **services** directory of a *scene* (including the top-level one),
are units of app logic (also commonly referred to as business logic). These
tend to be asynchronous pure functions that Do One Thing, optionally off-loading
some units of work to other services.

See [How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)
for rationale.

### Setup / Entry-points

Within the root **index.js** is the entry-point of the web application,
whose effective goal is to wire the app into a DOM node, then promptly
off-load any remaining logic to the mounted React component.

Within the **redux.setup.js** is the Redux boilerplate, including:

 1. Creating the Redux store by:
    1. …combining the reducers from this scene and each child scene.
    2. …applying any desired middleware, including `thunk`.

 2. Exporting a `ReduxProvider` component which is, essentially, a thin
    wrapper around a `react-redux` `Provider`.

Within the **spec.setup.js** is test setup code used by the test runner.
This wires in additional expectations useful for testing React apps (`chai-enzyme`)
and making assertions on `sinon` spies and stubs (`sinon-chai`).
