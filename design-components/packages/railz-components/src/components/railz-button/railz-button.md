---
title: Railz Button
---

# Buttons

The **railz-button** component is used for both `a` links and `button` elements and is specifically meant for things that look like
traditional buttons. It is not meant to be wrapper around all interactive things, only things that look to the user like a button.

## Primary Button

Out of the box, the `railz-button` component only requires a `label` property to present the user with a fully functional button. By default,
you get a **rounded, medium, primary** button. However, it would still need a `target` or `onClick` property passed to it to do
anything meaningful.

<railz-button label="Click me" onClick={() => this.buttonClickTest()} loading={this.isLoading} />

```
<railz-button label="Click me"  />
```

## Customization

The **button** component can be customized by defining `size`, `type`, `shape`, or by naming an `icon`. You can
also tell a button to fill it's available space by setting `grow`to `true`, and you can also set `disabled` and `loading`
states.

/./readme.md
