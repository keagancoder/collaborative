package com.citi.collaborative.dao;


import com.citi.collaborative.common.Ops;
import com.citi.collaborative.domain.CommonDomain;

import java.util.Collection;

public interface IBaseDao<T extends CommonDomain> {

    boolean save(T... objs);

    boolean update(T... objs);

    Collection<T> list(Ops<T> ops, Class<T> type);

    Collection<T> findAll(Class<T> type);

}
