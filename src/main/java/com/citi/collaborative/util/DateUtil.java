package com.citi.collaborative.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;


public class DateUtil {

    public static String now() {
        String dateFormatNow = "yyyy-MM-dd HH:mm:ss";
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat(dateFormatNow);
        return sdf.format(cal.getTime());
    }

}
