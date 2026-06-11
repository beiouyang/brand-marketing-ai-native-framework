
package com.jd.jd.design.wiki.jd.product.details.app.service.guardian;

import com.jd.guardian.core.DongGuardian;
import com.jd.guardian.core.Entry;
import com.jd.guardian.core.annotation.GuardianResource;
import com.jd.guardian.core.slots.block.GuardianBlockException;
import org.springframework.stereotype.Service;

@Service
public class GuardianDemoService {

    /**
     * 方式1： 通过 @GuardianResource方式
     */
    @GuardianResource(value = "testCluster", fallback = "helloFallback")
    public String testCluster(long s) {
        return String.format("resource is testCluster, param is:%d", s);
    }

    public String helloFallback(long s, Throwable ex) {
        // Do some log here.
        System.out.println("Go to helloFallback");
        ex.printStackTrace();
        return "testCluster is be limited, error occurred at " + s;
    }


    /**
     * 方式2： 通过API方式
     */
    public String testCluster1() {
        Entry entry = null;
        try {
            entry = DongGuardian.entry("testCluster1");
            return String.format("resource is testCluster1");
        } catch (GuardianBlockException guardianBlockException) {
            guardianBlockException.printStackTrace();
            System.out.println("blocked ~~~~" );
            return "testCluster1 is be limited, error occurred";
        } catch (Exception e) {
            throw e;
        } finally {
            if (entry != null) {
                entry.exit();
            }
        }
    }
}

