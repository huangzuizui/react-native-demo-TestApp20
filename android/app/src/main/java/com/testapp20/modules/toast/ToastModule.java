package com.testapp20;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {


  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }
  @Override
  public String getName() {
    return "BhToast";
  }
  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    return constants;
  }
  @ReactMethod
  public void show(String message, int duration, Callback successCallback) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
    successCallback.invoke("hello callback");
  }

  @ReactMethod
  public void measureLayout(
      int tag,
      int ancestorTag,
      Promise promise) {

      if (true) {
        promise.resolve("success!!");
      } else {
        promise.reject("error!!");
      }
  }
}