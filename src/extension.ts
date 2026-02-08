import * as vscode from 'vscode';


const delimiters = ['=', ':', '<-', '=>', '->'];

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.selectLHS', () => {
        
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found!');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection.isEmpty ? undefined : selection);
        
        const lhsVariables = extractLHS(text);

        if (lhsVariables.length > 0) {
            vscode.env.clipboard.writeText(lhsVariables.join('\n')).then(() => {
                vscode.window.showInformationMessage('Copied left-hand side variables to clipboard!');
            });
        } else {
            vscode.window.showInformationMessage('No variables found!');
        }
    });

    context.subscriptions.push(disposable);
}

function extractLHS(text: string): string[] {
    const lhsVariables: string[] = [];

    const lines = text.split('\n');

    for (let line of lines) {
        line = line.trim();

        for (let delimiter of delimiters) {
            const index = line.indexOf(delimiter);
            if (index !== -1) {
                const lhs = line.substring(0, index).trim();
                if (lhs) {
                    lhsVariables.push(lhs);
                }
                break;
            }
        }
    }

    return lhsVariables;
}
