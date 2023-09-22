package com.citi.collaborative.dao.impl;

import com.citi.collaborative.common.Ops;
import com.citi.collaborative.dao.IBaseDao;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public class CommonBaseDao<T> implements IBaseDao<T> {

    @Override
    public boolean save(T... objs) {
        return false;
    }

    @Override
    public boolean update(T... objs) {
        return false;
    }

    @Override
    public Collection<T> list(Ops ops) {
        return null;
    }
}
