package com.shoppinglist;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class ReportModule extends ReactContextBaseJavaModule {
    public ReportModule(ReactApplicationContext context) {
        super(context);
    }

    // add to CalendarModule.java
    @Override
    public String getName() {
        return "ReportModule";
    }

    @ReactMethod
    public void printReport(String reportContent) {
        Log.d("REPORT_MODULE", reportContent);
        // TODO chamar metodo pra gerar bitmap
    }
}
