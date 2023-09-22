package com.citi.collaborative.service.api;

import com.citi.collaborative.domain.Org;

import java.util.Collection;

public interface IOrgService extends IBaseService<Org> {

    Collection<Org> recommend(String keyWord);
}
