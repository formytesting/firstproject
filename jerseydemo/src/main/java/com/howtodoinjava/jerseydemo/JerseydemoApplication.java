package com.howtodoinjava.jerseydemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan; 
 
@SpringBootApplication
@ComponentScan(basePackages={"com.howtodoinjava.jerseydemo"})
public class JerseydemoApplication 
{
    public static void main(String[] args) 
    {
        SpringApplication.run(JerseydemoApplication.class, args);
    }
    
    
}
