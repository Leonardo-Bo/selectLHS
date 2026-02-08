# Select LHS

**Select LHS** is a Visual Studio Code extension that allows you to easily copy the left-hand side of variable assignments to the clipboard.

## Features
- Selects and copies the left-hand side of variable assignments (e.g., `x = 5`).
- Supports delimiters like `=`, `:`, `<-`, `=>`, `->`.
- Works with selected code or entire files.
- Accessible via the `Select LHS` command in the Command Palette.

## Installation
<!-- 1. Open **Extensions** in VSCode (Ctrl+Shift+X).
2. Search for **"Select LHS"** in the marketplace and click **Install**.

Alternatively,  -->
You can install it manually from a `.vsix` file:
1. Download the `.vsix` file from the [Releases section](https://github.com/Leonardo-Bo/selectLHS/releases).
2. Go to **File** → **Install from VSIX...** in VSCode.
3. Select the `.vsix` file to install.

## Commands
- **Select LHS**: Selects and copies the left-hand side variable in assignments.

## Usage
The extension can select and copy all left-hand side variables in a given block of code, not just in a single line.

### Example 1: Single Assignment
For a single line assignment like this:
```python
x = 5
```

Running `Select LHS` will copy `x` to the clipboard.

### Example 2: Multiple Assignments

In a block of code with multiple assignments, such as:

```javascript
{
    x: 5
    y: 10
    z: 15
}
```

Running `Select LHS` will copy `x`, `y`, and `z` to the clipboard in one go.

### Example 3: Within a Larger Block of Code

If you select a block of code and run `Select LHS`, it will collect all the left-hand side variables within the selection.

```python
def example():
    a = 1
    b = 2
    c = 3
    # Some other code here
    d = 4
```
Selecting only the lines inside the function and running `Select LHS` will copy `a`, `b`, `c`, and `d` to the clipboard.

Selecting the entire function (including `def example()`) and running `Select LHS` will copy `def example()` to the clipboard since the function definition is also considered a left-hand side assignment.

## Contributing

If you want to contribute to this extension, follow these steps:

1. Fork the repository.
2. Make your changes and submit a pull request.
3. Report any issues or suggestions via GitHub Issues.

## License

This project is licensed under the **MIT License**.
