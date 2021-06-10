package com.shoppinglist

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.google.gson.Gson
import com.shoppinglist.model.Report

class ReportActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_report)
        val reportContet = intent?.extras?.getString("report");
        reportContet?.let {
            val gson = Gson()
            val report = gson.fromJson(it, Report::class.java)
        }
    }
}