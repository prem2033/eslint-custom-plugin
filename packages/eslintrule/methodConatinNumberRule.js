function conatinsNumber(str) {
    return /[0-9]/.test(str);
}
const methodConatinNumber = (context) => {
    return {
        CallExpression: (node) => {
            const  name  = node.callee.name;
            if (conatinsNumber(name)) {
                context.report(
                    node,
                    `Method ${name} contains integer.`
                );
            }
        }
    }
};

module.exports = { methodConatinNumber };
