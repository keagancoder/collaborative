package com.citi.collaborative.service.api;


import java.util.Collection;

public interface IBaseService<T> {

    boolean saveMany(T... objs);

    boolean updateMany(T... objs);

    Collection<T> findAll();
}
