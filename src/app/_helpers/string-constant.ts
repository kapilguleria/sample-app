export class StringConst {
    // Error Message
    public static get INVALID_INFORMATION(): string { return 'Please Enter Valid Information'; }
    public static get INVALID_CREDENTIALS(): string { return 'Incorrect email or password. Please try again.'; }
    public static get SOMETHING_WENT_WRONG(): string { return 'Something went wrong. Please try again.'; }
    public static get EMAIL_ALLREADY_EXISTS(): string { return 'Email Already exists. Please try with another.'; }
    public static get INVALID_OTP(): string { return 'Invalid OTP'; }
    public static get INVALID_CODE(): string { return 'Invalid Code'; }
    public static get EMAIL_NOT_FOUND(): string { return 'Please enter registered email.'; }
    public static get INVALID_AUTHENTICATION(): string { return 'User Unauthorised. Please Login.'; }
    public static get REQUIRED_FIELD(): string { return 'Please fill all required fields.'; }
    public static get IMAGE_UNSUPPORTED(): string { return 'Only images are supported.'; }
    public static get INVALID_OPENTOK_API_KEY(): string { return 'Invalid Opentok API key. Please Check'; }
    public static get PERFORMANCE_NOT_STARTED(): string { return 'Performance is not Started yet. Please try again later.'; }
    public static get EMAIL_NOT_VERIFIED(): string { return 'Your account is not verified. Please verify.'; }
    public static get INTERNET_CONNECTION_LOST(): string { return 'You lost your internet connection. Please try connecting again.'; }
    public static get WEBRTC_NOT_SUPPORT(): string { return 'Your System does not support WEBRTC. You can not Connect.'; }
    public static get USER_BLOCKED(): string { return 'Your account is blocked. Please contact admin.'; }
    public static get USER_NOT_EXIST(): string { return 'User does not exist.'; }
    public static get PERFORMER_STRIPE_NOT_EXIST(): string { return 'Performer Stripe Account is not Connected. Please connect with Admin.'; }
    public static get ACCOUNT_NOT_EXIST(): string { return 'To create paid Performance. Connect your Stripe Account first.'; }
    public static get STRIPE_KEY_NOT_FOUND(): string { return 'Stripe Key not found. Please connect with amdin.'; }
    public static get INVALID_DISCOUNT_CODE(): string { return 'Invalid Discount Code.'; }
    // Successful Message
    public static get LOGIN_SUCCESSFUL(): string { return 'Login Successfully'; }
    public static get SIGNUP_SUCCESSFUL(): string { return 'Signup Successfully'; }
    public static get FORGOT_PASSWORD(): string { return 'Update Password Successfully'; }
    public static get SEND_CODE(): string { return 'Code Sent Succesfully'; }
    public static get EMAIL_VERIFIED(): string { return 'Email Verified Succesfully. Please login'; }
    public static get PASSWORD_UPDATED(): string { return 'Password Updated Successfully. Please login with new password.'; }
    public static get PERFORMANCE_CREATED(): string { return 'Performance Created Successfully.'; }
    public static get LOGOUT_SUCCESSFUL(): string { return 'Logout Successfully.'; }
    public static get ADDED_FAVOURITE(): string { return 'Performance Added as Favourite.'; }
    public static get REMOVED_FAVOURITE(): string { return 'Performance Removed from Favourite.'; }
    public static get PERFORMANCE_BOOKED(): string { return 'Performance Booked Successfully.'; }
    public static get PERFORMANCE_ENDED(): string { return 'Performance Ended Successfully.'; }
    public static get IMAGE_UPLOADED(): string { return 'Profile Image Uploaded Successfully.'; }
    public static get PROFILE_UPDATED(): string { return 'Profile Updated Successfully.'; }
    public static get PERFORMANCE_UPDATED(): string { return 'Performance Updated Successfully.'; }
    public static get STRIPE_ACCOUNT_CONNECTED(): string { return 'Stripe Account Connected Succesfully.'; }
    public static get PERFORMANCE_ENDED_ALL(): string { return 'Performance ended by Performer.'; }
    public static get PERFORMANCE_ALREADY_BOOKED(): string { return 'Performance Already Booked.'; }
    public static get CARD_DELETED(): string { return 'Card Deleted Successfully'; }
    public static get TIP_SUCCESSFUL(): string { return 'Tip Sent Successfully.'; }
    public static get PERFORMANCE_ALREADY_JOINED(): string { return 'Performance alreday joined by you.'; }
    public static get VIEWER_BLOCKED_ADMIN(): string { return 'You have been blocked by Admin. Please contact admin.'; }
    // LocalStorate Name
    public static get USER_ID(): string { return 'user_id'; }
    public static get USER_NAME(): string { return 'user_name'; }
    public static get USER_EMAIL(): string { return 'user_email'; }
    public static get USER_IMAGE(): string { return 'user_image'; }
    public static get USER_TYPE(): string { return 'user_type'; }
    public static get LOGIN_TOKEN(): string { return 'token'; }
    public static get PERFORMER_ID(): string { return 'performer_id'; }
    public static get HOME_PAGE_ACCESS(): string { return 'home_page_access'; }
}
