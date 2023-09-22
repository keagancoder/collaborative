package com.citi.collaborative.dao;


import com.citi.collaborative.common.Ops;

import java.util.Collection;

public interface IBaseDao<T> {

    boolean save(T... objs);

    boolean update(T... objs);

    Collection<T> list(Ops ops);
}
