package com.accounterapp2;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.surajit.rnrg.RNRadialGradientPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.brentvatne.react.ReactVideoPackage;
import io.github.traviskn.rnuuidgenerator.RNUUIDGeneratorPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

public class MainApplication extends NavigationApplication {
    
    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
            new LinearGradientPackage(), 
            new ReactVideoPackage(),                     
            new RNGestureHandlerPackage(),
            new VectorIconsPackage(),
            new RNUUIDGeneratorPackage(),            
            new ReanimatedPackage(),
            new RNRadialGradientPackage()           
        );
    }
  
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    } 
}

    // @Override
    // protected List<ReactPackage> getPackages() {
    //   return Arrays.<ReactPackage>asList(
    //       new MainReactPackage(),
            // new RNRadialGradientPackage(),
            // new RNPopoverMenuPackage(),
            // new RNUUIDGeneratorPackage(),
            // new ReactVideoPackage(),
            // new VectorIconsPackage(),
            // new RNUUIDGeneratorPackage(),
            // new LinearGradientPackage(),                       
            // new SvgPackage(),            
            // new RNGestureHandlerPackage(),            
            // new ReactVideoPackage(),
    //       new LinearGradientPackage()
    //   );
    // }