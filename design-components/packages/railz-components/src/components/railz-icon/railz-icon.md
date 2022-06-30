---
title: Railz Icon
---

# Icons

## Icon component

**The railz-icon component** is a simple component that takes and icon name and an optional size prop.

```
<railz-icon icon="home" />
<railz-icon icon="home" size="medium />
```

This will return an inline SVG component and the `fill` color of the icon will be inherited by the `color` attribute of the parent element.

If you pass the component an icon name it doesn't recognize, make sure the **SVG** file is in `src/assets/icons` and has been added to the
Icon Library by followin the instructions below.

## Icon Library

<!-- <icon-library-list /> -->

## Generating the Icon Library

The icon library is built by scanning the project folder for any **SVG** files, then capturing the path data for each file and adding it to a JSON
object. The paths can then be loading into the `<railz-icon />` component by calling the original file name, minus the .svg file extension.

### Update the Library

From the project root, in the terminal, run:

```
npm run generate:icons
```

/./readme.md
