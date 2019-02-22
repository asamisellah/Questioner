class Utils {
  static getSuccessResponse(data) {
    return {
      success: true,
      data,
    };
  }

  static getFailureResponse(res, { message, status }) {
    if (message) return res.status(status).json({ success: false, message });
    return res.status(500).json({ success: false, message: 'Ooops! Something went wrong' });
  }
}

export default Utils;
