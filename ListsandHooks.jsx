Q-1 Explain Life cycle in Class Component and functional component with Hooks 
Ans.Component lifecycle is one of the most important concepts of React. Lifecycle methods give us a lot of possibilities to take control over the app updates and more!

    ---> Mounting
    The moment of the first render of the Component (inserting into the DOM) is called "mounting". It can happen only once in component lifecycle.

    ---> Updating
    This lifecycle method will update the DOM when the state or props change.

    ---> Unmounting
    This lifecycle method removes the component from the DOM.

    On the other hand, since React 16.8, we have got hooks that give us a lot of new possibilities. All of the hooks are awesome, but in my opinion, the game changer is two core hooks-
    "useEffect" which hooks up the lifecycle to the "functional component" and "useState" which makes the functional component stateful.

    To better understand the basics of lifecycle methods and see the differences between traditional React usage and more modern functional approach, we should discuss both.

    React class component methods
    I won't go too deep into the class lifecycle since this topic is already mature and well covered. Instead, I'll try to make a quick recap of the most important aspects.

    The most important of these are componentDidMount, componentDidUpdate, componentWillUnmount.

    ---> React class lifecycle

    On the diagram above you can see the most important lifecycle methods. To see all of the methods, please visit this cool diagram page

    ---> Mounting and componentDidMount
    Order of component mounting:

    -> constructor()
    -> static getDerivedStateFromProps()
    -> render()
    -> componentDidMount()

    -> componentDidMount is called just after the constructor invocation and the first render. It means that the component is already applied to the DOM and you can interact with 
    it.componentDidMount is a good place to set a subscription, timeout, interval or invoke an API request.

    ---> Updating with componentDidUpdate
    An update is caused by props or state changes. It goes with the following order

    -> static getDerivedStateFromProps()
    -> shouldComponentUpdate()
    -> render()
    -> getSnapshotBeforeUpdate()
    -> componentDidUpdate()

    --> componentDidUpdate happens just after the component re-render. This method is not called to the first render. You should use this method to make a request, set a state, or 
        operate on the DOM. Please do not forget to compare current and previous props/state to avoid an infinite loop.

    -> Unmounting the component
    > componentWillUnmount() is invoked just before a component is unmounted. You should use this method to clean up necessary timers, and subscriptions or cancel network requests.

    ---> React Hooks Lifecycle
    In this section, I will explain how the lifecycle works with the functional component. To understand the React hooks lifecycle, we will use a cool diagram inspired by donavon/hook-flow

    --> React Hooks Flow

    -> Mounting
    -> As you can see on the diagram above several things are happening in a specific order.

      -> First react run lazy initialisers
      -> First render
      -> React updates DOM   
      -> Run LayoutEffects
      -> Browser is painting the screen
      -> Run Effects

    -> What's going on here?

       -> First goes lazy initializers, after that React does the first render and updates the DOM, then React runs LayoutEffects. The next activity is browser screen painting and 
          after all, React run Effects.

    -> At this moment We are ready to read from the DOM, trigger an API request, set interval, timeout, etc.

    -> Updating
       -> During each update, React starts from re-render caused by state or props change. There's no lazy initializers invocation.

    -> Render
       -> React updates DOM
       -> Cleanup LayoutEffects
       -> Run LayoutEffects
       -> Browser is painting the screen
       -> Cleanup Effects
       -> Run Effects
             
     Please notice that after rendering React clean up LayoutEffects to run these right after. The browser then draws the screen and after that React cleans up Effects and runs it 
     just after.

     -> The main difference between mounting and updating are:

     -> Unmounting
        During unmounting React is cleaning up all effects.
        Clean up LayoutEffects
        Clean up Effects