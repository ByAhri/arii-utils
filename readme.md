# My Package

A utility package for reusable functions and classes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

```bash
npm install my-package
```

## Usage

```typescript
import { AriiUtils, AdvancedUtil } from "my-package";

// Create an instance of AriiUtils
const util = new AriiUtils({ id: "123", name: "Utility" });
console.log(util.getDetails()); // Output: ID: 123, Name: Utility

// Create an instance of AdvancedUtil
const advancedUtil = new AdvancedUtil({ id: "456", name: "Advanced", extraFeature: "Custom Feature" });
console.log(advancedUtil.getDetails()); // Output: ID: 456, Name: Advanced, Extra Feature: Custom Feature
```