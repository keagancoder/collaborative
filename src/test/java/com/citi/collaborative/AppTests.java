package com.citi.collaborative;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AppTests {

	public static final Logger LOGGER = LoggerFactory.getLogger(AppTests.class);

	@Test
	void contextLoads() {
		LOGGER.warn(">>> TEST");
	}

}
