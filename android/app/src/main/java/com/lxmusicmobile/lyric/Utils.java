package com.lxmusicmobile.lyric;

import android.os.Handler;

public class Utils {
  // https://gist.github.com/mathew-kurian/2bd2b8b3a2f6438d6786
  public static Object setTimeout(Runnable runnable, long delay) {
    return new TimeoutEvent(runnable, delay);
  }
  public static void clearTimeout(Object timeoutEvent) {
    if (timeoutEvent != null && timeoutEvent instanceof TimeoutEvent) {
      ((TimeoutEvent) timeoutEvent).cancelTimeout();
    }
  }
  private static class TimeoutEvent {
    private static Handler handler = new Handler();
    private volatile Runnable runnable;

    private TimeoutEvent(Runnable task, long delay) {
      runnable = task;
      handler.postDelayed(new Runnable() {
        @Override
        public void run() {
          if (runnable != null) {
            runnable.run();
          }
        }
      }, delay);
    }

    private void cancelTimeout() {
      runnable = null;
    }
  }
}
