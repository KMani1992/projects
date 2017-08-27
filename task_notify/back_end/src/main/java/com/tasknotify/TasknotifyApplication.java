package com.tasknotify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@SpringBootApplication
@EnableJpaRepositories
public class TasknotifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasknotifyApplication.class, args);
	}
}
