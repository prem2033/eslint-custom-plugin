function startsWithCapital(str) {
    return /[A-Z]/.test(str.charAt(0));
}

const vaildVaribles = (context) => {
    return {
        VariableDeclarator: (node) => {
            const name = node.id.name;
            const start = node.id.start;
            if (startsWithCapital(name)) {
                context.report({
                    node: node,
                    message: `Variable '${name}' starts with uppercase.`,
                    fix: function (fixer) {
                        return fixer.replaceTextRange([start, start + 1], (name.charAt(0)).toLowerCase());
                    }
                });
            }
        }
    }
};

module.exports = { vaildVaribles };
