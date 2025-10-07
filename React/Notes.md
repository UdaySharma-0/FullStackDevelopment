React is a library not a framework. It only focuses on UI but
gives flexibility to work with any other library like React
dom, React router, and many more.

React is actually divided into two parts 
-->React
-->React - Dom

-React is used to make components and Re-Render the components whenever changes occurs in UI.
 It stores previous state and current state of VDom in memory and compares every time both state if yes then update the specific component. This process of differencing is called **Reconciliation (Or diffing)**

-On other hand React-Dom convert all the components from virtual Dom to Real Browser Dom (like div, h1, button, events).

-This is happening because React wants to make UI for all(Webapp, AndroidApp, ios) means if you want to build webapp then use React Dom and if you want to develop android or ios app use React-Native library instead of React Dom


React.StrictMode ->Wrapper Component(It catch the error and mistakes that we do at time of development)

UseRef is used for store data without rerender the component ex-additem.jsx

Fuctional updates : Instead of using spread operator(like ...todoItems, {newitem, newdate}), Use current values in settodoitems() bcs react works asynchrously and may not able to update before use to the ...todoitem array



**Context API**
-It creates shared storage throughout the components which prevents unnecessary props passing to the children

-It creates shared storage throughout the components which helps avoid prop drilling (passing props through multiple levels of components). This makes it easier to share data between components without explicitly passing props through each level of the component tree.

**Use Reducer**
-It is a hook that is used to handle state management more efficiently especially complex state logic(code that we write before return statement)
-Two components are 
--->Reducer (It is a pure function like utility)
--->Action
