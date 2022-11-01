import Toast from "react-native-root-toast";

const ErrorHandler = (() => {
    const handle = (error: any) => {
        switch (error.response.status) {
            case 400:
                return error.response.data.forEach((message: string) => _showError(message));
            case 401:
                return _showError("You provided incorrect credentials");
            case 403:
                return _showError("You are not allowed to watch this resource");
            case 404:
                return _showError(error.response.data.error + ": '" + error.response.data.path + "'");
            case 500:
                return _showError("An error ocurred");
        }
    };

    const _showError = (message: string) => {
        Toast.show(message);
    };

    return {
        handle
    };
})();
export default ErrorHandler;
