# React Hook Component State
This hook allows you to isolate and manage the state within the component, reducing rendering operations and keeping the source code concise.

## Motivation
As the component complexity increases more state values are needed and a rendering operation is required whenever the state values change. Instead of adding a part of the source code as a separate component file to improve performance, you can use this hook to internally isolate the component state.


## Installation

The easiest way to install `react-hook-component-state` is with [npm](https://www.npmjs.com/).

```bash
npm install react-hook-component-state
```

Alternately, download the source.

```bash
git clone https://github.com/stegano/react-hook-component-state.git
```

## Examples
### with MUI Backdrop Component
To use the Backdrop or Dialog component, you need to create and use an `open` state value. You can quickly and easily create a component with a state by using the `use-component-state` hook without creating an `open` state value inside the current component.
```ts
const SomeComponent = () => {
  ...
  const [$backdrop, setBackdropOpen] = useComponentState<boolean>(
    (isOpen, setOpen) => {
      /**
       * MUI Backdrop Component
       * @see https://mui.com/components/backdrop/#main-content
       */
      return (
        <Backdrop open={open} onClose={() => setOpen(false)}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )
    }, 
    true
  );
  return (
    ...
    {$backdrop}
  )
}
```

### with MUI Dialog Component
```ts
const SomeComponent = () => {
  ...
  const [$dialog, setBackdropOpen] = useComponentState<{
    isOpen: boolean, content: string
    }>(
    ({ isOpen, content }, setState) => {
      /**
       * MUI Dialog Component
       * @see https://mui.com/components/dialogs/#main-content
       */
      const handleClose = () => {
        setState((state) => {
          return {
            ...state,
            isOpen: false
          }
        })
      }
      return (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>{content}</DialogContent>
        </Dialog>
      )
    }, 
    {
      isOpen: false,
      content: 'Dialog Content'
    }
  );
  ...
  return (
    ...
    {$dialog}
  )
}
```
