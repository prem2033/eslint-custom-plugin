function startsWithCapital(str) {
    return /[A-Z]/.test(str.charAt(0));
}
const vaildVaribles = (context) => {
    return {
        VariableDeclarator: (node) => {
            const  name  = node.id.name;
            if (startsWithCapital(name)) {
                context.report(
                    node,
                    `Variable '${name}' starts with uppercase.`
                );
            }
        }
    }
};

module.exports = { vaildVaribles };
