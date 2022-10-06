function handleAsyncMiddleware(asyncFunc) {
    return async (req, res, next) => {
        try {
            await asyncFunc(req, res, next);
        }
        catch(err) {
            next(err);
        }
    }
}

module.exports = handleAsyncMiddleware;