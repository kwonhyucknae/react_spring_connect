// import logger from '../../logger.ts';

export default function clientMiddleware(client) {
    return ({ dispatch, getState }) => next => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        const { promise, types, ...rest } = action;
        if (!promise) {
            return next(action);
        }

        let apiTypes;

        if (types.length === 2) {
            apiTypes = [undefined, ...types];
        } else {
            apiTypes = types;
        }

        const [REQUEST, SUCCESS, FAILURE] = apiTypes;

        if (REQUEST) {
            next({ ...rest, type: REQUEST });
        }

        return promise(client).then(
            result => next({ ...rest, result, type: SUCCESS }),
            error => next({ ...rest, error, type: FAILURE }), // promise 가 reject 될때
        ).catch((error) => { // next 수행 도중 error 발생 시
            // logger.error('MIDDLEWARE ERROR:', error);
            next({ ...rest, error, type: FAILURE });
        });
    };
}